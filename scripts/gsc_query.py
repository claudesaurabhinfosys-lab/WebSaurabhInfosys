import requests, os

def clean(s):
    return s.strip().lstrip('﻿').strip() if s else s

access_token = clean(os.environ.get("GSC_ACCESS_TOKEN", ""))
headers = {"Authorization": f"Bearer {access_token}", "Content-Type": "application/json"}

# List all sites this token has access to
r = requests.get("https://searchconsole.googleapis.com/webmasters/v3/sites", headers=headers)
print(f"Status: {r.status_code}")
print(r.text)