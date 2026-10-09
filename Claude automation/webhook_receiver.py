"""Receive WhatsApp webhooks: log replies and delivery statuses, record opt-outs.

    py webhook_receiver.py            # listens on http://localhost:5000/webhook

Environment:
    WA_VERIFY_TOKEN  required. Same string you enter in Meta's webhook settings.
    WA_APP_SECRET    recommended. App secret from App Settings > Basic; used to
                     reject requests that don't come from Meta.
    PORT             optional, default 5000.
"""
import hashlib
import hmac
import os
import sys

from flask import Flask, abort, request

from common import REPLIES_FIELDS, REPLIES_LOG_CSV, add_optout, append_row, now_iso

OPTOUT_WORDS = {"stop", "stop all", "unsubscribe", "optout", "opt out", "opt-out", "cancel",
                "stop promotions", "remove", "remove me"}

app = Flask(__name__)


def signature_ok(raw_body):
    secret = os.environ.get("WA_APP_SECRET")
    if not secret:
        return True
    header = request.headers.get("X-Hub-Signature-256", "")
    expected = "sha256=" + hmac.new(secret.encode(), raw_body, hashlib.sha256).hexdigest()
    return hmac.compare_digest(header, expected)


def message_text(msg):
    kind = msg.get("type")
    if kind == "text":
        return msg.get("text", {}).get("body", "")
    if kind == "button":
        return msg.get("button", {}).get("text", "")
    if kind == "interactive":
        inter = msg.get("interactive", {})
        reply = inter.get("button_reply") or inter.get("list_reply") or {}
        return reply.get("title", "")
    return ""


def handle_message(msg):
    phone = msg.get("from", "")
    text = message_text(msg)
    append_row(REPLIES_LOG_CSV, REPLIES_FIELDS, {
        "timestamp": now_iso(), "kind": "message", "phone": phone,
        "message_id": msg.get("id", ""), "type": msg.get("type", ""), "text": text})
    if text.strip().lower().rstrip(".!") in OPTOUT_WORDS:
        if add_optout(phone, "whatsapp_reply", text):
            print(f"Opt-out recorded for +{phone}")


def handle_status(status):
    errors = status.get("errors") or []
    error = "; ".join(f"{e.get('code')} {e.get('title', '')}" for e in errors)
    append_row(REPLIES_LOG_CSV, REPLIES_FIELDS, {
        "timestamp": now_iso(), "kind": "status", "phone": status.get("recipient_id", ""),
        "message_id": status.get("id", ""), "status": status.get("status", ""), "error": error})


@app.get("/webhook")
def verify():
    if (request.args.get("hub.mode") == "subscribe"
            and request.args.get("hub.verify_token") == os.environ.get("WA_VERIFY_TOKEN")):
        return request.args.get("hub.challenge", ""), 200
    abort(403)


@app.post("/webhook")
def receive():
    if not signature_ok(request.get_data()):
        abort(403)
    body = request.get_json(silent=True) or {}
    for entry in body.get("entry", []):
        for change in entry.get("changes", []):
            value = change.get("value", {})
            for msg in value.get("messages", []):
                handle_message(msg)
            for status in value.get("statuses", []):
                handle_status(status)
    return "ok", 200


@app.get("/")
def health():
    return "webhook running", 200


if __name__ == "__main__":
    if not os.environ.get("WA_VERIFY_TOKEN"):
        sys.exit("Set WA_VERIFY_TOKEN first.")
    if not os.environ.get("WA_APP_SECRET"):
        print("Warning: WA_APP_SECRET not set; webhook signatures are not checked.")
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
