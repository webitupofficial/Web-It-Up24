"""Shared helpers for the Webitup24 WhatsApp scripts."""
import csv
import os
import re
from datetime import datetime, timezone
from pathlib import Path

# Data files live next to the scripts unless WA_DATA_DIR says otherwise.
DATA_DIR = Path(os.environ.get("WA_DATA_DIR") or Path(__file__).resolve().parent)

OPTOUTS_CSV = DATA_DIR / "optouts.csv"
SEND_LOG_CSV = DATA_DIR / "send_log.csv"
REPLIES_LOG_CSV = DATA_DIR / "replies_log.csv"

OPTOUT_FIELDS = ["phone", "opted_out_at", "source", "message"]
SEND_LOG_FIELDS = ["timestamp", "phone", "name", "template", "result", "message_id", "error"]
REPLIES_FIELDS = ["timestamp", "kind", "phone", "message_id", "type", "text", "status", "error"]

GRAPH_API_VERSION = os.environ.get("WA_API_VERSION", "v23.0")


def now_iso():
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def normalize_phone(value, default_country_code=""):
    """Return digits-only international number (no +), or "" if it isn't valid."""
    if value is None:
        return ""
    if isinstance(value, float):
        value = int(value)
    digits = re.sub(r"\D", "", str(value))
    if digits.startswith("00"):
        digits = digits[2:]
    if default_country_code and len(digits) == 10:
        digits = default_country_code + digits
    if not 11 <= len(digits) <= 15:
        return ""
    return digits


def append_row(path, fields, row):
    """Append one row to a CSV, writing the header if the file is new."""
    path = Path(path)
    is_new = not path.exists() or path.stat().st_size == 0
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "a", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fields)
        if is_new:
            writer.writeheader()
        writer.writerow({k: row.get(k, "") for k in fields})


def read_rows(path):
    path = Path(path)
    if not path.exists():
        return []
    with open(path, newline="", encoding="utf-8") as f:
        return list(csv.DictReader(f))


def load_optouts():
    return {normalize_phone(r.get("phone")) for r in read_rows(OPTOUTS_CSV)} - {""}


def add_optout(phone, source, message=""):
    phone = normalize_phone(phone)
    if not phone or phone in load_optouts():
        return False
    append_row(OPTOUTS_CSV, OPTOUT_FIELDS,
               {"phone": phone, "opted_out_at": now_iso(), "source": source, "message": message})
    return True
