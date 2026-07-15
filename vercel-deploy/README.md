# Prompt Ops Academy — Vercel Deployment

## What's included
- `index.html` — the full Prompt Ops Academy game
- `support.js` — DC runtime (required)
- `_ds/` — design system assets
- `api/score.js` — serverless proxy for Anthropic AI scoring
- `vercel.json` — Vercel configuration

## Deploy in 5 steps

### 1. Get an Anthropic API key
Go to https://console.anthropic.com → API Keys → Create Key. Copy it.

### 2. Create a Vercel account
Go to https://vercel.com and sign up (free). Connect your GitHub if you like,
or use the drag-and-drop deploy below.

### 3. Deploy
- Go to https://vercel.com/new
- Drag the entire `vercel-deploy` folder onto the page
- Vercel auto-detects the config and deploys

### 4. Add your API key
- In your Vercel project → Settings → Environment Variables
- Add: Name = `ANTHROPIC_API_KEY`, Value = your key from Step 1
- Click Save, then Redeploy (top-right of Deployments tab)

### 5. You're live
Vercel gives you a URL like `prompt-ops-academy.vercel.app`.
You can add a custom domain (e.g. `academy.beyondtalentcs.com`) in
Settings → Domains.

## Use in Reach 360
In Reach 360, create a new course → Add content → Web Link.
Paste your Vercel URL. Learners access the full game with live AI scoring.

## Demo mode
Add `?demo=1` to the URL to activate the auto-play demo controller:
`https://your-site.vercel.app/?demo=1`

## Reset progress
Scroll to the bottom of the Command Center and click "↺ Reset Session Progress".

## Cost estimate
- Vercel hosting: **free** (Hobby plan covers this easily)
- Anthropic API: ~$0.01–0.03 per prompt scored (Claude claude-opus-4-5 pricing)
  With 100 learners completing all 7 missions: ~$7–20 total

## Support
Built by beyondtalent Consultation Services for DevLearn 2026.
Contact: naly@beyondtalentcs.com
