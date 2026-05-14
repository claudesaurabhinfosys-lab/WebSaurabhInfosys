import requests, os, sys

def clean(s):
    return s.strip().lstrip('﻿').strip() if s else s

access_token  = clean(os.environ.get("GSC_ACCESS_TOKEN", ""))
refresh_token = clean(os.environ.get("GSC_REFRESH_TOKEN", ""))
client_id     = clean(os.environ.get("GSC_CLIENT_ID", ""))
client_secret = clean(os.environ.get("GSC_CLIENT_SECRET", ""))

if refresh_token and client_id and client_secret:
    r = requests.post("https://oauth2.googleapis.com/token", data={
        "client_id": client_id, "client_secret": client_secret,
        "refresh_token": refresh_token, "grant_type": "refresh_token"
    })
    if r.status_code == 200:
        access_token = r.json()["access_token"]
        print("Token refreshed OK")

headers = {"Authorization": f"Bearer {access_token}", "Content-Type": "application/json"}
site_enc = requests.utils.quote("https://saurabhinfosys.com/", safe="")
base = "https://searchconsole.googleapis.com/webmasters/v3"

# Get indexing issues via sitemaps API
print("\n=== SITEMAPS ===")
r = requests.get(f"{base}/sites/{site_enc}/sitemaps", headers=headers)
print(r.text)

# Check URL inspection for key pages
print("\n=== URL INSPECTION — KEY PAGES ===")
inspect_base = "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect"
test_urls = [
    "https://saurabhinfosys.com/",
    "https://www.saurabhinfosys.com/",
    "https://saurabhinfosys.com/blog/flutter-ai-enabled-apps/",
    "https://saurabhinfosys.com/blog/flutter-ai-enabled-apps",
    "https://saurabhinfosys.com/about/",
    "https://saurabhinfosys.com/blog/google-gemma-4-vs-chatgpt/",
    "https://saurabhinfosys.com/usa/",
    "https://saurabhinfosys.com/singapore/",
]
for url in test_urls:
    r = requests.post(inspect_base, headers=headers, json={
        "inspectionUrl": url,
        "siteUrl": "https://saurabhinfosys.com/"
    })
    d = r.json()
    result = d.get("inspectionResult", {})
    index = result.get("indexStatusResult", {})
    verdict = index.get("verdict", "UNKNOWN")
    coverage = index.get("coverageState", "")
    canonical = index.get("googleCanonical", "")
    user_canonical = index.get("userCanonical", "")
    print(f"\n{url}")
    print(f"  Verdict:        {verdict}")
    print(f"  Coverage:       {coverage}")
    print(f"  Google canon:   {canonical}")
    print(f"  User canon:     {user_canonical}")