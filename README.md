# ODIN — CONSISTENT AI AVATAR SYSTEM

> Building the permanent fictional face of ÆTY ONE: one identity, many timelines.

[![Live experience](https://img.shields.io/badge/live-aety--odin.vercel.app-d9ff3f?style=flat-square&labelColor=080808)](https://aety-odin.vercel.app)
![Fictional AI character](https://img.shields.io/badge/disclosure-fictional%20AI%20character-edebe4?style=flat-square&labelColor=080808)
![Status](https://img.shields.io/badge/status-character%20system%20v0.1-edebe4?style=flat-square&labelColor=080808)

Odin is ÆTY ONE's high-end global artifact hunter—and its long-term AI avatar. This repository is both his cinematic introduction and the working system used to keep his face, body, behavior, wardrobe language, and story coherent across generated images and films.

## Project context

Odin belongs to the wider **ÆTY ONE** fashion universe. Explore the [ÆTY ONE storefront](https://aety-one-two.vercel.app) for DROP 01, AetyVerse, and the complete brand experience, or visit the [aety-one source repository](https://github.com/tejaswi-raghav/aety-one).

The public experience opens with two scroll-controlled films in narrative order: **The Namibia Run** first, followed by **Meet Odin**. The browser maps scroll position to native video time. Editing masters remain outside the web repository; the site carries high-quality delivery encodes at their native display resolution for reliable browser playback.

## The objective

Build a recognizable character who can move through campaigns, locations, eras, and product drops without becoming a different person in every generation.

Odin begins as an unaware human vessel of a timeless force. He later discovers his power and purpose. Until that reveal, the performance stays grounded: observant, economical, capable, and human.

## System map

```text
Identity contract
      ↓
Approved reference pack
      ↓
Scene + wardrobe specification
      ↓
Keyframe generation
      ↓
Image-to-video / controlled motion
      ↓
Continuity and brand QA
      ↓
Campaign release
```

The machine-readable source of truth lives in [`avatar/odin.identity.json`](avatar/odin.identity.json). Creative rules and production practices live in [`docs/`](docs/).

## Identity lock

The features that must survive every shot:

- Male, apparent age 27; tall, athletic, functional build
- Long, wavy dark-brown hair; weathered texture; shoulder length
- Dense dark beard with a defined moustache
- Warm olive-brown complexion, angular face, deep-set hazel-brown eyes
- Calm, assessing gaze; controlled movement; dry wit rather than theatrical swagger
- Worn technical layers, archival utility, premium materials, no costume-like fantasy armor
- Recurring watch, pendant, camera, and field pack where the story permits

Read the complete production rules in [Character Consistency](docs/CHARACTER-CONSISTENCY.md).

## Production workflow

1. Start with the identity JSON and the approved face/body reference sheet.
2. Fill the [scene prompt template](prompts/SCENE-TEMPLATE.md); never rewrite identity descriptors ad hoc.
3. Generate and approve a still keyframe before spending on motion.
4. Animate the approved keyframe with restrained camera and body motion.
5. Run the [continuity checklist](docs/QA-CHECKLIST.md) before publishing.
6. Record the approved output, prompt, seed/reference IDs, model, and date.

The detailed handoff is in [Video Pipeline](docs/VIDEO-PIPELINE.md). Planned capabilities are tracked in the [Roadmap](docs/ROADMAP.md).

## Repository structure

```text
.
├── assets/                     # Approved public campaign media
├── avatar/
│   └── odin.identity.json      # Machine-readable identity contract
├── docs/
│   ├── CHARACTER-CONSISTENCY.md
│   ├── QA-CHECKLIST.md
│   ├── ROADMAP.md
│   └── VIDEO-PIPELINE.md
├── prompts/
│   └── SCENE-TEMPLATE.md
├── index.html                  # Campaign experience
├── styles.css                  # ÆTY ONE visual system
├── script.js                   # Multi-film scroll controller
└── vercel.json                 # Static deployment rules
```

## Run locally

No build step or dependencies are required.

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173` and scroll through both film chapters. For correct seeking behavior, serve the directory over HTTP rather than opening `index.html` directly.

## Deploy

The production branch is connected to Vercel. Every approved push to `main` can be deployed as the live campaign at [aety-odin.vercel.app](https://aety-odin.vercel.app).

## Creative disclosure

Odin is a fictional AI character created by ÆTY ONE. Public profiles, campaign pages, and partnership material must identify him as fictional/AI outside the in-world storytelling. Do not imply that he is a real person or use a real individual's identity as his source.

## Contributing

Changes that affect Odin's face, body, voice, signature objects, origin, or disclosure require an identity review. Use the pull request template and include side-by-side references for visual changes.

© 2026 ÆTY ONE. All character and campaign rights reserved.
