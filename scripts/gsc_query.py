import json, datetime, requests, os
from google.oauth2 import service_account
from google.auth.transport.requests import Request as GoogleRequest

key_data = json.loads(os.environ["GSC_KEY"])
SITE_URL = "sc-domain:saurabhinfosys.com"
creds = service_account.Credentials.from_service_account_info(key_data, scopes=["https://www.googleapis.com/auth/webmasters.readonly"])
creds.refresh(GoogleRequest())
token = creds.token
headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}
end_date = datetime.date.today().strftime("%Y-%m-%d")
start_date = (datetime.date.today() - datetime.timedelta(days=90)).strftime("%Y-%m-%d")
base = "https://searchconsole.googleapis.com/webmasters/v3"
site_enc = requests.utils.quote(SITE_URL, safe="")

def query(dims=None, limit=20, order_by="impressions"):
    body = {"startDate": start_date, "endDate": end_date, "rowLimit": limit}
    if dims:
        body["dimensions"] = dims
        body["orderBy"] = [{"fieldName": order_by, "sortOrder": "DESCENDING"}]
    r = requests.post(f"{base}/sites/{site_enc}/searchAnalytics/query", headers=headers, json=body)
    return r.json()

d = query()
print("=== OVERALL (last 90 days) ===")
if "rows" in d:
    row = d["rows"][0]
    print(f"Clicks:       {int(row['clicks'])}")
    print(f"Impressions:  {int(row['impressions'])}")
    print(f"Avg CTR:      {row['ctr']*100:.2f}%")
    print(f"Avg Position: {row['position']:.1f}")
else:
    print("No data:", d)

d = query(["query"], limit=20)
print("\n=== TOP 20 KEYWORDS (by impressions) ===")
if "rows" in d:
    print(f"{'Keyword':<45} {'Clicks':>6} {'Impr':>7} {'CTR':>6} {'Pos':>6}")
    print("-"*75)
    for row in d["rows"]:
        print(f"{row['keys'][0][:44]:<45} {int(row['clicks']):>6} {int(row['impressions']):>7} {row['ctr']*100:>5.1f}% {row['position']:>6.1f}")

d = query(["page"], limit=15)
print("\n=== TOP 15 PAGES (by impressions) ===")
if "rows" in d:
    print(f"{'Page':<45} {'Clicks':>6} {'Impr':>7} {'Pos':>6}")
    print("-"*65)
    for row in d["rows"]:
        page = row["keys"][0].replace("https://saurabhinfosys.com","").replace("https://www.saurabhinfosys.com","") or "/"
        print(f"{page[:44]:<45} {int(row['clicks']):>6} {int(row['impressions']):>7} {row['position']:>6.1f}")

print("\n=== PERIOD COMPARISON ===")
for label, d1, d2 in [("Last 28 days", 28, 0), ("Prior 28 days", 56, 28)]:
    s = (datetime.date.today() - datetime.timedelta(days=d1)).strftime("%Y-%m-%d")
    e = (datetime.date.today() - datetime.timedelta(days=d2)).strftime("%Y-%m-%d")
    r = requests.post(f"{base}/sites/{site_enc}/searchAnalytics/query", headers=headers, json={"startDate": s, "endDate": e, "rowLimit": 1})
    rows = r.json().get("rows", [])
    if rows:
        row = rows[0]
        print(f"{label}: Clicks={int(row['clicks'])} Impressions={int(row['impressions'])} CTR={row['ctr']*100:.2f}% Pos={row['position']:.1f}")

d = query(["country"], limit=10, order_by="clicks")
print("\n=== TOP COUNTRIES ===")
if "rows" in d:
    for row in d["rows"]:
        print(f"  {row['keys'][0]:<15} clicks={int(row['clicks'])} impr={int(row['impressions'])}")

d = query(["device"], limit=5, order_by="clicks")
print("\n=== BY DEVICE ===")
if "rows" in d:
    for row in d["rows"]:
        print(f"  {row['keys'][0]:<12} clicks={int(row['clicks'])} impr={int(row['impressions'])}")