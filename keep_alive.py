"""
keep_alive.py — Run this on any always-on machine (your laptop, Replit, etc.)
to prevent Render free tier from spinning down your app.

Usage:
    pip install requests schedule
    python keep_alive.py

OR add this as a separate Render cron job service pointing to your app URL.
"""
import requests
import schedule
import time
import os
from datetime import datetime

# ── CHANGE THIS to your Render URL ──
APP_URL = os.getenv('APP_URL', 'https://your-app-name.onrender.com')

def ping():
    try:
        r = requests.get(f'{APP_URL}/ping', timeout=10)
        print(f'[{datetime.now().strftime("%H:%M:%S")}] Ping: {r.status_code} — App is alive ✅')
    except Exception as e:
        print(f'[{datetime.now().strftime("%H:%M:%S")}] Ping failed: {e} ❌')

# Ping every 10 minutes
schedule.every(10).minutes.do(ping)

print(f'🌾 Keep-alive started for: {APP_URL}')
print('Pinging every 10 minutes. Press Ctrl+C to stop.\n')
ping()  # Immediate first ping

while True:
    schedule.run_pending()
    time.sleep(60)