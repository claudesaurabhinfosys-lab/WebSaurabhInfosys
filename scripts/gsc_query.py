import json, sys, os, requests
from datetime import date, timedelta

def clean(s):
    return s.strip().lstrip('﻿').strip() if s else s

# OAuth credentials
CLIENT_ID     = clean(os.environ.get("GSC_CLIENT_ID", ""))
CLIENT_SECRET = clean(os.environ.get("GSC_CLIENT_SECRET", ""))
REFRESH_TOKEN = clean(os.environ.get("GSC_REFRESH_TOKEN", ""))
SITE_URL      = "https://saurabhinfosys.com/"

def get_access_token():
    resp = requests.post("https://oauth2.googleapis.com/token", data={
        "client_id":     CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "refresh_token": REFRESH_TOKEN,
        "grant_type":    "refresh_token",
    })
    resp.raise_for_status()
    return resp.json()["access_token"]

def gsc_query(token, payload):
    headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}
    url = f"https://searchconsole.googleapis.com/webmasters/v3/sites/{requests.utils.quote(SITE_URL, safe='')}/searchAnalytics/query"
    resp = requests.post(url, headers=headers, json=payload)
    resp.raise_for_status()
    return resp.json()

def main():
    print("=== Google Search Console Report ===")
    print(f"Site: {SITE_URL}")
    print(f"Generated: {date.today()}\n")

    token = get_access_token()
    print("Token refreshed successfully\n")

    today = date.today()
    end   = today - timedelta(days=3)
    start = end - timedelta(days=27)
    prev_end   = start - timedelta(days=1)
    prev_start = prev_end - timedelta(days=27)

    # Overall stats (last 28 days)
    overall = gsc_query(token, {
        "startDate": str(start), "endDate": str(end),
        "dimensions": [], "rowLimit": 1
    })
    row = overall.get("rows", [{}])[0]
    print(f"--- Last 28 Days ({start} to {end}) ---")
    print(f"Clicks:       {int(row.get('clicks', 0)):,}")
    print(f"Impressions:  {int(row.get('impressions', 0)):,}")
    ctr = row.get('ctr', 0) * 100
    print(f"CTR:          {ctr:.2f}%")
    print(f"Avg Position: {row.get('position', 0):.1f}\n")

    # Period comparison
    prev = gsc_query(token, {
        "startDate": str(prev_start), "endDate": str(prev_end),
        "dimensions": [], "rowLimit": 1
    })
    prev_row = prev.get("rows", [{}])[0]
    cur_clicks  = int(row.get('clicks', 0))
    prev_clicks = int(prev_row.get('clicks', 0))
    diff = cur_clicks - prev_clicks
    pct  = (diff / prev_clicks * 100) if prev_clicks > 0 else 0
    trend = "UP" if diff >= 0 else "DOWN"
    print(f"--- vs Previous 28 Days ({prev_start} to {prev_end}) ---")
    print(f"Clicks: {cur_clicks:,} vs {prev_clicks:,} ({trend} {abs(pct):.1f}%)\n")

    # Top 20 keywords
    kw_data = gsc_query(token, {
        "startDate": str(start), "endDate": str(end),
        "dimensions": ["query"], "rowLimit": 20,
        "orderBy": [{"fieldName": "clicks", "sortOrder": "DESCENDING"}]
    })
    print("--- Top 20 Keywords (by Clicks) ---")
    for r in kw_data.get("rows", []):
        q = r["keys"][0]
        print(f"  {q:<45} Clicks:{int(r['clicks']):>4}  Impr:{int(r['impressions']):>5}  CTR:{r['ctr']*100:>5.1f}%  Pos:{r['position']:>5.1f}")
    print()

    # Top 15 pages
    pg_data = gsc_query(token, {
        "startDate": str(start), "endDate": str(end),
        "dimensions": ["page"], "rowLimit": 15,
        "orderBy": [{"fieldName": "clicks", "sortOrder": "DESCENDING"}]
    })
    print("--- Top 15 Pages (by Clicks) ---")
    for r in pg_data.get("rows", []):
        page = r["keys"][0].replace("https://saurabhinfosys.com", "")
        print(f"  {page:<50} Clicks:{int(r['clicks']):>4}  Impr:{int(r['impressions']):>5}  Pos:{r['position']:>5.1f}")
    print()

    # Countries
    country_data = gsc_query(token, {
        "startDate": str(start), "endDate": str(end),
        "dimensions": ["country"], "rowLimit": 10,
        "orderBy": [{"fieldName": "clicks", "sortOrder": "DESCENDING"}]
    })
    print("--- Top Countries ---")
    for r in country_data.get("rows", []):
        print(f"  {r['keys'][0]:<20} Clicks:{int(r['clicks']):>4}  Impr:{int(r['impressions']):>5}")
    print()

    # Devices
    device_data = gsc_query(token, {
        "startDate": str(start), "endDate": str(end),
        "dimensions": ["device"], "rowLimit": 5,
        "orderBy": [{"fieldName": "clicks", "sortOrder": "DESCENDING"}]
    })
    print("--- Device Breakdown ---")
    for r in device_data.get("rows", []):
        print(f"  {r['keys'][0]:<15} Clicks:{int(r['clicks']):>4}  Impr:{int(r['impressions']):>5}  CTR:{r['ctr']*100:>5.1f}%")
    print()
    print("=== Report Complete ===")

if __name__ == "__main__":
    main()