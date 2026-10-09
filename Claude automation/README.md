# Webitup24 WhatsApp Cloud API outreach

Commands below are for **Windows PowerShell** on your PC. Linux/VPS equivalents are in section 6.

## Files
- `send_templates.py`: sends approved templates to verified, consenting leads. **Dry run by default.**
- `webhook_receiver.py`: records replies, delivery statuses and opt-outs.
- `create_tracker.py`: creates an empty `leads.xlsx` (already done).
- `common.py`: shared helpers.
- `leads.xlsx`: your leads. Sheet `Leads`; see the `Column guide` sheet.
- `optouts.csv`: created automatically. These numbers are never messaged. You can add numbers by hand too.
- `send_log.csv`: every send attempt (dry runs included).
- `replies_log.csv`: replies and delivery updates.

## 1. Install dependencies (done on this PC)
```
py -m pip install requests openpyxl flask
```

## 2. Set environment variables
Type the values yourself; never put them in files or chat. `setx` stores them permanently;
**open a new PowerShell window afterwards**.
```
setx WA_PHONE_NUMBER_ID "<Phone Number ID from API Setup>"
setx WA_ACCESS_TOKEN "<permanent System User token>"
setx WA_VERIFY_TOKEN "<any random string you choose>"
setx WA_APP_SECRET "<App Secret from App settings > Basic>"
```
Optional: `WA_API_VERSION` (default `v23.0`).

## 3. Fill the tracker
Open `leads.xlsx` (close it again before sending).
- `Phone`: with country code, e.g. `919876543210`. 10-digit numbers get `91` added (`--country-code` changes this).
- `Consent source`: how the person agreed to be contacted on WhatsApp. **Rows without it are skipped.**
- `Lead status` = `Verified` and `Draft status` = `Approved` to be messaged.
- `Var1..Var3`: values for the template's `{{1}}..{{3}}`. Leave blank if the template has no variables.
  The number of filled Vars must match the template exactly, or Meta rejects the message.

## 4. Run the webhook locally (testing)
1. Terminal 1: `py webhook_receiver.py` (listens on port 5000).
2. Terminal 2: give it a public HTTPS address with a tunnel, e.g. `cloudflared tunnel --url http://localhost:5000`
   (install: `winget install Cloudflare.cloudflared`). Copy the `https://....trycloudflare.com` URL it prints.
3. Meta app > WhatsApp > Configuration > Webhook: callback URL `https://<tunnel-url>/webhook`,
   verify token = your `WA_VERIFY_TOKEN`. Click Verify and save, then subscribe to `messages`.
4. The quick tunnel URL changes every time you restart cloudflared; update it in Meta if so.

## 5. Test before going live
1. Confirm the template is approved in WhatsApp Manager and note its language code (e.g. `en` or `en_US`).
2. In `leads.xlsx`, put **your own number** in the `TEST - Me` row.
3. Dry run: `py send_templates.py --template webitup24_clinic_intro_v1 --lang en --limit 1`
4. If the output looks right: add `--send`.
5. Reply to the message from your phone and check `replies_log.csv`.
6. Reply `STOP` and confirm `optouts.csv` gets your number.

## 6. Move to a VPS (after testing)
- Ubuntu: `sudo apt install python3-pip` then `pip3 install requests openpyxl flask gunicorn`.
- Secrets: put them in a systemd `EnvironmentFile` (readable only by root), not in the code.
- Run the webhook: `gunicorn -w 1 -b 127.0.0.1:5000 webhook_receiver:app` under systemd, behind Caddy
  (`reverse_proxy 127.0.0.1:5000`) on a domain/subdomain for automatic HTTPS.
- Point the Meta webhook URL at `https://<your-domain>/webhook`.
- Daily sends via cron, e.g. `0 11 * * 1-5 cd /opt/wa && python3 send_templates.py --template ... --limit 10 --send`.

## 7. Pilot and scale
- Start with 10 leads per day (`--limit 10`).
- Check quality rating and replies in WhatsApp Manager before raising volume.
- The script's daily cap is 100 (`--daily-cap`). Meta's own messaging limit may be lower.

## Rules the scripts follow
- Only leads with `Lead status` = Verified, `Draft status` = Approved and a `Consent source` are contacted.
- Numbers in `optouts.csv` are never contacted. Replies like STOP / UNSUBSCRIBE / Stop promotions add them automatically.
- Each number is contacted at most once per template (tracked in `send_log.csv`).
- Numbers that failed before are skipped unless you pass `--retry-failed`.
- Marketing templates include an opt-out line ("Reply STOP to unsubscribe").

## Before running with `--send`
- Meta Business verification is complete. ✅
- Phone number added, display name approved, payment method added.
- Each template is approved.
- The Excel tracker is up to date and closed.
- You have reviewed the dry-run output.
