# Saurabh Infosys Website — Project Context

## Live Site
- **URL:** https://saurabhinfosys.com
- **GitHub Repo:** claudesaurabhinfosys-lab/WebSaurabhInfosys
- **Framework:** Next.js 14 (static export) → `out/` directory deployed via rsync

## Server
- **Host:** stored in `SSH_HOST` GitHub secret
- **User:** stored in `SSH_USER` GitHub secret  
- **Key:** stored in `SSH_KEY` GitHub secret
- **Web root:** `/home/saurabhinfosys.com/public_html/`
- **Hosting:** cPanel shared hosting (Apache)

## Deploy
- **Auto-deploy:** any push to `main` triggers `deploy.yml` → builds Next.js → rsyncs `out/` to server
- **Excluded from rsync:** `.htaccess`, `extract.php`, `phptest.php`, `deploy-webhook.php`
- Never overwrite `.htaccess` via deploy — it has custom rewrite rules (www redirect, trailing slash, HTTPS)

## GitHub Actions Workflows
| File | Purpose | Trigger |
|---|---|---|
| `deploy.yml` | Build & deploy to server | push to main + manual |
| `gsc_report.yml` | GSC SEO analytics report | Mon+Thu 6AM UTC + manual |
| `linkedin_scheduler.yml` | Post to LinkedIn page | Mon/Wed/Fri 9AM IST + manual |
| `htaccess_fix.yml` | SSH into server to update .htaccess | manual only |

## GitHub Secrets
| Secret | Purpose |
|---|---|
| `SSH_KEY` | Ed25519 private key for server SSH |
| `SSH_HOST` | Server hostname |
| `SSH_USER` | SSH username |
| `GSC_CLIENT_ID` | Google OAuth client ID |
| `GSC_CLIENT_SECRET` | Google OAuth client secret |
| `GSC_REFRESH_TOKEN` | Long-lived OAuth refresh token for GSC API |
| `SOCIALADMIN_TOKEN` | Bearer token for socialadmin.mysampark.com LinkedIn API |
| `DEPLOY_PATH` | Server deploy path |

## Key Files
| File | Purpose |
|---|---|
| `src/app/layout.tsx` | Root layout — GA4 tag (G-6DRPCYYNQ5), metadata, schema.org |
| `src/lib/data.ts` | All content data — BLOG_POSTS, COMPANY, services |
| `src/components/layout/Navbar.tsx` | Top navigation |
| `src/components/layout/Footer.tsx` | Footer with links |
| `scripts/gsc_query.py` | GSC analytics report script |
| `linkedin_posts/` | LinkedIn post text files (01–09) |
| `.linkedin_published` | Tracks which LinkedIn posts have been published |

## Analytics & SEO
- **Google Analytics 4:** G-6DRPCYYNQ5 (tag in layout.tsx via next/script)
- **Google Search Console:** https://saurabhinfosys.com/ (URL prefix format)
- **GSC API access:** OAuth2 refresh token flow (own Google Cloud app credentials)

## LinkedIn Auto-Posting
- Posts via socialadmin.mysampark.com API
- `business_profile_id=2`, `social_media LinkedIn id=1` = Saurabh Infosys page
- Posts tracked in `.linkedin_published` (one number per line, e.g. "01")
- To post manually: `gh workflow run linkedin_scheduler.yml --repo claudesaurabhinfosys-lab/WebSaurabhInfosys`
- To post a specific post: add `--field post_number=06`

## .htaccess Rules (on server — do NOT overwrite)
1. www → non-www redirect (301)
2. HTTP → HTTPS redirect (301)
3. Trailing slash enforcement for directories (301)
4. Serve pre-built `.html` files for clean URLs
5. SPA fallback to `/index.html`

## Blog Posts
Located in `src/lib/data.ts` as `BLOG_POSTS` array. Each post has:
- `slug`, `title`, `excerpt`, `date`, `category`, `readTime`, `content` (MDX-like)

To add a new blog post: add an entry at the top of `BLOG_POSTS` array in `data.ts`, push to main → auto-deploys.

## Company Info
- **Name:** Saurabh Infosys
- **Location:** Ahmedabad, Gujarat, India
- **WhatsApp:** stored in `COMPANY.whatsapp` in `data.ts`
- **Email:** stored in `COMPANY.email` in `data.ts`
- **Clutch rating:** 4.9★, 80+ clients

## Products
| Product | URL |
|---|---|
| SSMS (School ERP) | myschoolmanagementsystem.com |
| MySociety | /products/mysociety |
| MySampark (Housing Society) | mysampark.com |

## Current SEO Status (as of May 2026)
- 10 clicks / 483 impressions in last 28 days
- Top keyword: "saurabh infosys" (branded)
- Best opportunity: Gemma 4 vs ChatGPT post (155 impressions, position 6)
- GSC indexing issues fixed via .htaccess update (May 2026)

## Common Tasks

### Trigger a deploy
```
gh workflow run deploy.yml --repo claudesaurabhinfosys-lab/WebSaurabhInfosys
```

### Run GSC report
```
gh workflow run gsc_report.yml --repo claudesaurabhinfosys-lab/WebSaurabhInfosys
```

### Post next LinkedIn post immediately
```
gh workflow run linkedin_scheduler.yml --repo claudesaurabhinfosys-lab/WebSaurabhInfosys
```

### SSH into server (via workflow)
```
gh workflow run htaccess_fix.yml --repo claudesaurabhinfosys-lab/WebSaurabhInfosys
```

### Check recent deploys
```
gh run list --repo claudesaurabhinfosys-lab/WebSaurabhInfosys --workflow deploy.yml --limit 5
```