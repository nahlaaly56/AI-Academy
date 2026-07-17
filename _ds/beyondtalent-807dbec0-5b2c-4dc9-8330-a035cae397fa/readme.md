# BeyondTalent Design System

> **Empowering Talent to Go the Distance** — Official design system for BeyondTalent Consultation Services.

BeyondTalent Consultation Services is a premier HR and organizational development firm based in the Middle East. They provide executive talent acquisition, HR consulting, and organizational development strategy to corporate clients across the Arab region. CEO: Nahla Aly · naly@beyondtalentcs.com · www.beyondtalentcs.com

---

## Sources

- **BeyondTalent Brand Kit** (local: `Branding/BeyondTalent Brand Kit/` & uploaded `BeyondTalent Brand Kit.zip`) — DC files for presentation deck, email signature, social media, design system reference, and `bt-brand.js` color/type tokens
- **Fonts**: Anton + Inter variable fonts (uploaded as `Anton,Inter.zip`)
- **SVG logos**: `Branding/Beyond-talent Dark.svg`, `Branding/BT Dark.svg`, `Branding/Beyond-talent Light + Slogan.svg`
- **Background assets**: `Branding/BT Computer BG.gif`, `Branding/BT Video Background - Curly.png`
- **Note**: Video files from Branding/ (`.mp4`) were not extracted. The animated GIF `BT Video Backgrounds - Curly.gif` exceeded the 30MB upload limit.

---

## Content Fundamentals

**Tone:** Professional, empowering, confident. Direct and action-oriented without being cold.

**Voice:**
- "We" / "our" for BeyondTalent; "you" / "your" for clients
- Action verbs: empower, unlock, build, drive, transform, accelerate
- Numbers build credibility — use them ("500+ placements", "95% retention")
- No emoji anywhere in brand materials or UI
- No filler copy; every word earns its place

**Casing:**
- Anton/display headlines: **ALWAYS ALL CAPS**
- Section eyebrow labels: ALL CAPS, 2.5–3px letter-spacing
- Body copy: Sentence case
- Button labels: Title Case ("Get Started", "Learn More")

**Bilingual:** English is primary. Arabic (Tajawal, `direction:rtl`) appears in formal regional materials. Tagline in Arabic: "تمكين المواهب للوصول إلى أبعد مدى"

**Tagline:** "Empowering Talent to Go the Distance" — use verbatim, unchanged.

---

## Visual Foundations

### Colors
| Token | Value | Use |
|-------|-------|-----|
| `--color-blue` | `#1170A1` | Buttons, links, interactive |
| `--color-red` | `#AC1225` | Accent, CTA, emphasis |
| `--color-navy` | `#0A4166` | Headers, dark backgrounds |
| `--color-near-black` | `#0D1B2A` | Body text |
| `--color-bg` | `#F2F5F8` | Page/section backgrounds |
| `--color-muted` | `#6B7A8D` | Secondary text |
| `--color-border` | `#E2E8EF` | Dividers, input borders |
| `--color-blue-tint` | `#EBF4FA` | Icon bg, tag chips |
| `--color-red-tint` | `#F6DDE1` | Error states, red chips |

**Gradients:** Blue diagonal `135deg #1170A1→#0A4166` (depth, headers); Brand horizontal `90deg #1170A1→#AC1225` (accent bars, slide tops, signatures).

### Typography
- **Anton** — Display only, ALL CAPS, weight 400. Headlines, section titles, large numbers, wordmark.
- **Inter** — Body and all UI. Weights 300–700. Variable font included locally.
- **Tajawal** — Arabic text, weights 400–900. Loaded via Google Fonts CDN (not local).

### Backgrounds & Textures
- Light sections: `#F2F5F8` or `#fff`. Dark sections: `#0A4166` or `#0D1B2A`.
- `assets/bg-computer.gif` — animated tech background. Always add `rgba(10,65,102,0.45)` dark overlay when placing content over it.
- `assets/bg-curly.png` — static curly/wavy pattern; use as subtle decorative background.
- Large translucent circles (border-radius 50%, rgba 0.07–0.25) are used as decorative bg elements on dark sections.
- Diagonal clip-path panels appear in LinkedIn/social media templates.

### Cards & Surfaces
- White bg, `border-radius: 12px`, `box-shadow: 0 2px 8px rgba(0,0,0,0.06)`, no border.
- Dark stat cards: brand color fill, no shadow needed.

### Animation & Interaction
- Transitions: `0.15s ease` on hover states.
- Button hover: background darkens ~15%. No opacity changes.
- No animation in UI beyond GIF backgrounds.

### Corner Radii
`4px` sm → `6px` md → `8px` lg → `12px` xl → `9999px` pill

### Shadows
`0 1px 4px rgba(0,0,0,0.07)` sm · `0 2px 8px rgba(0,0,0,0.06)` md · `0 4px 20px rgba(0,0,0,0.10)` lg

---

## Iconography

- Inline SVG, stroke style, 2px weight, round linecaps/joins.
- Blue (`#1170A1`) or red (`#AC1225`) stroke color.
- Container: 44×44px square, `background: #EBF4FA`, `border-radius: 10px`; icon is 22×22px inside.
- Red icon container: `background: #F6DDE1` for red-accented services.
- No external icon CDN, no icon font, no emoji.
- Icons are hand-placed inline `<svg>` in component and template source.

---

## Components

All in `components/core/`. Exported via `window.DesignSystem_807dbe`:

| Component | Description |
|-----------|-------------|
| `Button` | 7 variants × 3 sizes |
| `Badge` | 7 variants (pill, solid, square, border, muted) |
| `Card` | Generic white card wrapper |
| `ServiceCard` | Icon + title + description + optional link |
| `StatCard` | Large Anton number on brand-color background |
| `ProfileCard` | Avatar initials + name + role + tags |
| `Input` | Text input with focus/error states |
| `Select` | Dropdown with focus state |
| `Divider` | line / blue / gradient variants |
| `AccentBar` | Left-border callout wrapper (blue or red) |

---

## Templates

| Template | Path | Description |
|----------|------|-------------|
| Presentation Deck | `templates/presentation-deck/` | 8-slide branded pitch deck |
| Email Signature | `templates/email-signature/` | HTML email signature, light + dark variants |
| Social Media | `templates/social-media/` | LinkedIn banner/posts, Instagram cards & stories |

---

## UI Kits

| Product | Path | Description |
|---------|------|-------------|
| Consulting Website | `ui_kits/website/index.html` | Full landing page — nav, hero, stats, services, about, contact, footer |

---

## File Index

```
assets/
  logos/             PNG and SVG logo files (light, dark, with/without slogan, favicon)
  bg-computer.gif    Animated tech loop background
  bg-curly.png       Static curly pattern background
fonts/
  Anton-Regular.ttf
  Inter-Variable.ttf
  Inter-Variable-Italic.ttf
tokens/
  colors.css         Color palette + semantic aliases (66 tokens)
  typography.css     @font-face + type scale tokens
  spacing.css        Spacing scale + border radius + layout
  effects.css        Shadows, transitions, overlays
styles.css           Root @import entry point — link this one file
components/core/     Button, Badge, Card, ServiceCard, StatCard, ProfileCard,
                     Input, Select, Divider, AccentBar
guidelines/          Foundation specimen cards (13 cards across Colors/Type/Spacing/Brand groups)
templates/           DC templates: presentation-deck, email-signature, social-media
ui_kits/website/     Consulting website landing page
readme.md            This file
SKILL.md             Claude Code agent skill definition
```

---

## Intentional Additions

- **`AccentBar`** — reusable wrapper for the left-border callout pattern that appears throughout slides and docs (not in source as a standalone component)
- **`Select`** — derived from form inputs shown in the design system doc

## Caveats

- Tajawal (Arabic font) is Google Fonts CDN only — no local TTF. An offline-first project should include local Tajawal files.
- `BT Video Backgrounds - Curly.gif` (30MB+) could not be included; use `bg-curly.png` as a static fallback.
- Video files from Branding (`.mp4`) are not included. Reference the originals in `Branding/` if needed.
- Logo asset paths in templates are relative to the template folder (`../../assets/logos/`); adjust if copying templates to a different project structure.
