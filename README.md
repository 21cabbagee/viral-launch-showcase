# ⚡ LAUNCHFORGE / DOOMERS — Viral Launch Showcase & Case Studies Portal

<p align="center">
  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80" alt="LaunchForge Banner" width="100%" style="border-radius: 14px;" />
</p>

<p align="center">
  <a href="https://github.com/21cabbagee/viral-launch-showcase/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License: MIT" /></a>
  <a href="https://github.com/21cabbagee/viral-launch-showcase/stargazers"><img src="https://img.shields.io/github/stars/21cabbagee/viral-launch-showcase?style=for-the-badge&color=ffbe3b" alt="GitHub Stars" /></a>
  <a href="https://github.com/21cabbagee/viral-launch-showcase/network/members"><img src="https://img.shields.io/github/forks/21cabbagee/viral-launch-showcase?style=for-the-badge&color=10b981" alt="GitHub Forks" /></a>
  <a href="https://21cabbagee.github.io/viral-launch-showcase/"><img src="https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-emerald.svg?style=for-the-badge" alt="Live Demo" /></a>
</p>

<p align="center">
  <b>A data-dense, numbers-first editorial agency marketing website and interactive case studies directory replicating the signature Doomers.ai layout. Architected for high-conviction tech launches with timeline metrics, creator node distribution blueprints, and an interactive reach-math calculator.</b>
</p>

<p align="center">
  🚀 <b><a href="https://21cabbagee.github.io/viral-launch-showcase/">EXPLORE THE LIVE PORTAL</a></b> 🚀
</p>

---

## 💎 Project Vision & Aesthetic

**LAUNCHFORGE** is an editorial, numbers-first agency showcase built to demonstrate how high-conviction tech companies achieve algorithmic timeline dominance.

- **High-Contrast Dark Theme**: Deep `#09090b` canvas with rich zinc surfaces, subtle `#ffffff` borders, and electric emerald `#10b981` accents.
- **Editorial Typography**: Inter / Geist Sans paired with tabular monospace numerals (Geist Mono / JetBrains Mono) for rigorous data density.
- **Curated Dataset**: 8 verified launch case studies (TypeSafe AI, Tavus Griffin, Visko, Arceus Legal, Pine Computer, Bolt Forge, Synthetix, HyperKernel).
- **Interactive Reach Calculator**: Real-time projection math estimating 48-hour view ceilings, creator node blast radius, and bookmark velocity based on company stage and starting followers.

---

## 📊 Core Performance Benchmarks

```
┌───────────────────────────────────────┬───────────────────────────────────────┐
│ 200M+ Delivered Client Impressions    │ 40.4M Peak Views on Single Campaign   │
├───────────────────────────────────────┼───────────────────────────────────────┤
│ $100M First-Week Booked ARR Tracked   │ 80–150+ Seeded Creator Nodes / Drop   │
├───────────────────────────────────────┼───────────────────────────────────────┤
│ 28.4x Average Follower Multiplier     │ 8,900 Median Saved Bookmarks          │
└───────────────────────────────────────┴───────────────────────────────────────┘
```

---

## 🗂️ Features & Functional Modules

### 1. 🔍 Stage-Segmented Directory & Search
- Filter drops across **All Stages**, **Out of Stealth**, **Seed to Series B**, and **Growth / Late Stage**.
- Instant keyword search across company names, product categories, and technical tags.
- Dynamic sorting by **Most Views**, **Highest Follower Multiplier**, and **Reading Time**.
- Toggle between **Editorial Grid Cards** and **Compact Tabular Directory**.

### 2. 🗃️ Deep-Dive Strategy Deconstruction Drawer
Clicking any study reveals a full tactical deconstruction:
- **T-48 Hours (Dark Wave)**: Embargoed private build distribution to vetted technical maintainers.
- **09:00 AM EST (Primary Detonation)**: Raw terminal/product demo video with zero corporate fluff.
- **+45 Minutes (Secondary Cascade)**: Synchronized creator node quote commentary.
- Verified audience growth metrics and founder takeaways.

### 3. 🧮 Interactive Reach-Math Calculator
- **Inputs**:
  - Starting followers slider ($0$ to $50,000+$)
  - Drop Objective: Stealth Reveal, Series A/B Announcement, Major Product Drop, Developer Tooling
  - Creator Node Cluster: Core (45 Nodes), Extended (95 Nodes), Maximum Detonation (150 Nodes)
- **Live Outputs**:
  - Projected 48-Hour View Ceiling
  - Estimated Follower Gain & Multiplier
  - Projected Bookmarks
  - Timeline Saturation Index
  - Direct 1-tap "Lock In Your Launch Date" intake trigger

### 4. 📜 The 5 Laws of Timeline Dominance
- Law 01: Immediate Proof of Work (First 4 seconds matter)
- Law 02: Synchronized Node Detonations (45-minute window)
- Law 03: Bookmark Optimization Over Empty Likes (5x algorithm weight)
- Law 04: The Stealth Arbitrage
- Law 05: Zero-Friction Inbound Capture

### 5. 🔒 Confidential Launch Intake Drawer
- Modal intake form capturing founder handles, target launch dates, product stage, and technical briefs under two-way NDA.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS 3.4 (custom dark theme, typography, subtle grid overlays)
- **Icons**: Lucide React
- **Typography**: Geist Sans, Geist Mono, JetBrains Mono
- **Deployment**: GitHub Pages (Relative base routing enabled)

---

## 📂 Repository Structure

```
viral-launch-showcase/
├── index.html                  # HTML entry with Geist & JetBrains Mono fonts
├── vite.config.js              # Vite config with relative base path (./)
├── tailwind.config.js          # Dark theme colors, surface tokens & monospace fonts
├── postcss.config.js           # PostCSS Tailwind and Autoprefixer config
├── src/
│   ├── main.jsx                # React app mount
│   ├── App.jsx                 # Main layout & modal controller
│   ├── index.css               # Tailwind directives & editorial scrollbars
│   ├── data/
│   │   └── caseStudies.js      # Structured launch dataset & agency metrics
│   └── components/
│       ├── Header.jsx          # Top navigation with live status badges
│       ├── Hero.jsx            # Editorial headline & "Start Here" flagship duo
│       ├── MetricsStrip.jsx    # 4-column aggregate benchmarks
│       ├── CaseStudiesDirectory.jsx # Search, filter tabs, grid & tabular views
│       ├── CaseStudyModal.jsx  # Detailed strategy & timeline deconstruction
│       ├── ReachCalculator.jsx # Interactive reach & ROI math estimator
│       ├── PlaybookSection.jsx # The 5 laws of viral distribution
│       ├── FAQSection.jsx      # Logistics & ethics accordion
│       ├── ContactModal.jsx    # Confidential campaign brief intake modal
│       └── Footer.jsx          # Minimalist wireframe footer with live UTC clock
└── README.md
```

---

## 🚀 Running Locally

```bash
# Clone the repository
git clone https://github.com/21cabbagee/viral-launch-showcase.git
cd viral-launch-showcase

# Install dependencies
npm install

# Start local development server
npm run dev
```

Build for production:
```bash
npm run build
npm run preview
```

---

## 📜 License

Licensed under the **MIT License**. Free for commercial and personal exploration.
