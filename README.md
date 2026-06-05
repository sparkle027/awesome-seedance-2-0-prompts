<div align="center">

# 🎬 Awesome Seedance 2.0 Prompts

**A curated, regularly-updated collection of real Seedance 2.0 AI video prompts — each with its output and original source.**

[![English](https://img.shields.io/badge/%F0%9F%87%BA%F0%9F%87%B8%20English-Default-111111)](README.md)
[![Español](https://img.shields.io/badge/%F0%9F%87%AA%F0%9F%87%B8%20Espa%C3%B1ol-Predeterminado-lightgrey)](README_es.md)
[![Português](https://img.shields.io/badge/%F0%9F%87%B5%F0%9F%87%B9%20Portugu%C3%AAs-Padr%C3%A3o-lightgrey)](README_pt.md)
[![日本語](https://img.shields.io/badge/%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC%E8%AA%9E-%E6%A8%99%E6%BA%96-lightgrey)](README_ja.md)
[![한국어](https://img.shields.io/badge/%F0%9F%87%B0%F0%9F%87%B7%20%ED%95%9C%EA%B5%AD%EC%96%B4-%EA%B8%B0%EB%B3%B8-lightgrey)](README_ko.md)
[![Deutsch](https://img.shields.io/badge/%F0%9F%87%A9%F0%9F%87%AA%20Deutsch-Standard-lightgrey)](README_de.md)
[![Français](https://img.shields.io/badge/%F0%9F%87%AB%F0%9F%87%B7%20Fran%C3%A7ais-Par%20d%C3%A9faut-lightgrey)](README_fr.md)
[![Türkçe](https://img.shields.io/badge/%F0%9F%87%B9%F0%9F%87%B7%20T%C3%BCrk%C3%A7e-Varsay%C4%B1lan-lightgrey)](README_tr.md)
[![繁體中文](https://img.shields.io/badge/%F0%9F%87%B9%F0%9F%87%BC%20%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-%E9%A0%90%E8%A8%AD-lightgrey)](README_zh-TW.md)
[![简体中文](https://img.shields.io/badge/%F0%9F%87%A8%F0%9F%87%B3%20%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-%E9%BB%98%E8%AE%A4-lightgrey)](README_zh-CN.md)
[![Русский](https://img.shields.io/badge/%F0%9F%87%B7%F0%9F%87%BA%20%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-%D0%9F%D0%BE%20%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-lightgrey)](README_ru.md)



[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Prompts](https://img.shields.io/badge/Prompts-20_Curated-111111.svg)](#all-prompts)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](docs/CONTRIBUTING.md)
[![GitHub stars](https://img.shields.io/github/stars/sparkle027/awesome-seedance-2-0-prompts?style=social)](https://github.com/sparkle027/awesome-seedance-2-0-prompts)

### [🚀 Browse the full gallery with playable videos on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=banner&utm_campaign=awesome-seedance-2-0-prompts)

</div>

> ⭐ Find this useful? **Star the repo** to follow new prompts — updated as fresh Seedance 2.0 videos trend on X.

> 📎 Executable originals: [docs/PROMPTS_ORIGINAL.md](docs/PROMPTS_ORIGINAL.md)

---

## 🌐 Browse the Full Gallery

Prompts here are a snapshot. The live gallery on **gptproto.com** plays every video inline, lets you search, and copies any prompt in one click.

| | 📄 This README | 🌐 [gptproto.com](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts) |
|---|:---:|:---:|
| ▶️ Playable video previews | Thumbnails only | ✅ Inline playback |
| 🔍 Search & filter | Ctrl/⌘-F | ✅ Full-text + filters |
| 📋 One-click copy | Manual select | ✅ Copy button |
| 🔌 Generate via API | — | ✅ Seedance 2.0 API |

**[→ Open the gallery on gptproto.com](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)**

---

## 📖 Contents

- [🌐 Browse the Full Gallery](#browse-the-full-gallery)
- [🎬 What is Seedance 2.0?](#-seedance-20)
- [🔌 Use the Seedance 2.0 API](#use-the-seedance-20-api)
- [📰 News](#news)
- [📊 Statistics](#statistics)
- [⭐ Featured Prompts](#featured-prompts)
- [📋 All Prompts](#all-prompts)
- [🤝 How to Contribute](#how-to-contribute)
- [📄 License](#license)
- [🙏 Acknowledgements](#acknowledgements)

---

## 🎬 What is Seedance 2.0?

Seedance 2.0 is a state-of-the-art AI video generation model. Give it a text prompt (text-to-video) or a starting image (image-to-video) and it produces short, high-motion, cinematic clips with coherent physics, camera moves, and characters.

This list collects prompts that actually went viral on X — so you can see the exact wording behind standout clips, then remix it for your own.

- 🎥 **Text-to-video & image-to-video from a single prompt**
- 🎬 Cinematic camera motion and consistent subjects
- ⚡ Fast iteration — tweak a line, regenerate
- 🔌 Available through the gptproto Seedance 2.0 API

---

## 🔌 Use the Seedance 2.0 API

```bash
curl https://api.gptproto.com/v1/video/generations \
  -H "Authorization: Bearer $GPTPROTO_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "seedance-2-0",
    "prompt": "A cinematic slow-motion shot of a paper plane gliding over a neon city at night"
  }'
```

👉 **[Get an API key on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=api&utm_campaign=awesome-seedance-2-0-prompts)**

---

## 📰 News

- **2026-06-05** — Launched the list with curated Seedance 2.0 prompts. ⭐ Star to follow updates.

---

## 📊 Statistics

<div align="center">

| Metric | Value |
|---|---|
| 📝 Curated prompts | **20** |
| 🎬 Model | **Seedance 2.0** |
| 🔄 Last updated | **Jun 5, 2026** |

</div>

---

## ⭐ Featured Prompts

> The most-loved Seedance 2.0 clips, by engagement.

### 1. An average shift at Waffle House - make sure it's retarded and gets 5…

![Type](https://img.shields.io/badge/Video-Seedance%202.0-111111) ![Likes](https://img.shields.io/badge/❤️-24.2K-e0245e)

<div align="center">
<a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts"><img src="https://oss.gptproto.com/growth/x/images/2022017937192956372_0_poster.jpg" width="640" alt="An average shift at Waffle House - make sure it's retarded and gets 5…"></a>
<br><sub>▶️ <a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts">Play this video on gptproto.com</a></sub>
</div>

**📝 Prompt**

```
An average shift at Waffle House - make sure it's retarded and gets 50 likes.
```

📎 [View executable original prompt →](docs/PROMPTS_ORIGINAL.md#prompt-0acf7726-c731-433b-9911-071d5379f13a)

**By** [Charles Curran ✓](https://x.com/charliebcurran) (@charliebcurran) · 82.5K followers

❤️ 24.2K · 🔁 2.1K · 🔖 7.8K · 👁 2.3M

<sub>📅 Feb 12, 2026</sub>

**[▶️ Watch & remix on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)**

---

### 2. Punch the Monkey punches back. Make the girls proud.

![Type](https://img.shields.io/badge/Video-Seedance%202.0-111111) ![Likes](https://img.shields.io/badge/❤️-13.8K-e0245e)

<div align="center">
<a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts"><img src="https://oss.gptproto.com/growth/x/images/2025000532646265184_0_poster.jpg" width="640" alt="Punch the Monkey punches back. Make the girls proud."></a>
<br><sub>▶️ <a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts">Play this video on gptproto.com</a></sub>
</div>

**📝 Prompt**

```
Punch the Monkey punches back. Make the girls proud.
```

📎 [View executable original prompt →](docs/PROMPTS_ORIGINAL.md#prompt-7a1fdbaf-be88-43ef-a3a1-9e9a833044f6)

**By** [Charles Curran ✓](https://x.com/charliebcurran) (@charliebcurran) · 82.5K followers

❤️ 13.8K · 🔁 1.8K · 🔖 3.6K · 👁 1.4M

<sub>📅 Feb 21, 2026</sub>

**[▶️ Watch & remix on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)**

---

### 3. AI goes woke. Make it really offensive - like really offensive.

![Type](https://img.shields.io/badge/Video-Seedance%202.0-111111) ![Likes](https://img.shields.io/badge/❤️-12.3K-e0245e)

<div align="center">
<a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts"><img src="https://oss.gptproto.com/growth/x/images/2024585477148627118_0_poster.jpg" width="640" alt="AI goes woke. Make it really offensive - like really offensive."></a>
<br><sub>▶️ <a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts">Play this video on gptproto.com</a></sub>
</div>

**📝 Prompt**

```
AI goes woke. Make it really offensive - like really offensive.
```

📎 [View executable original prompt →](docs/PROMPTS_ORIGINAL.md#prompt-67064587-b93f-4fdc-b7b0-12d6b29ef1c9)

**By** [Charles Curran ✓](https://x.com/charliebcurran) (@charliebcurran) · 82.5K followers

❤️ 12.3K · 🔁 1.2K · 🔖 4.3K · 👁 868.6K

<sub>📅 Feb 19, 2026</sub>

**[▶️ Watch & remix on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)**

---

### 4. Prompt: A realistic close-up shot of a small digital camera screen gl…

![Type](https://img.shields.io/badge/Video-Seedance%202.0-111111) ![Likes](https://img.shields.io/badge/❤️-3.1K-e0245e)

<div align="center">
<a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts"><img src="https://oss.gptproto.com/growth/x/images/2058715926451896397_0_poster.jpg" width="640" alt="Prompt: A realistic close-up shot of a small digital camera screen gl…"></a>
<br><sub>▶️ <a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts">Play this video on gptproto.com</a></sub>
</div>

**📝 Prompt**

```
Prompt: A realistic close-up shot of a small digital camera screen glowing brightly in a dark indoor environment. Displayed on the LCD is a candid early-2010s style photograph of a young East Asian woman with long dark wavy hair standing beside a wooden shelf packed tightly with colorful comic books and magazines.

She wears a black spaghetti-strap top with a loose white cardigan hanging casually from both shoulders and faded blue jeans. Captured mid-laugh while turning her face slightly sideways, her expression feels spontaneous and natural, with hair falling softly across part of her cheek.

The harsh direct flash from the compact camera creates strong highlights on her face and cardigan while flattening shadows in the background, producing an authentic nostalgic digicam aesthetic. Slight motion blur and digital grain enhance the candid realism.

Camera UI overlays are visible across the LCD screen, including the timestamp “8. 1. 2012 3:15 AM,” exposure data “1/30 F3.4 ISO 100,” focus indicators, and a small green battery symbol in the corner.

The image preserves visible screen pixel structure, slight glare reflections, chromatic softness, and compressed digital texture. Outside the LCD, the surrounding darkness fades smoothly into blur, emphasizing the glowing nostalgic screen.

Shot to resemble an authentic Sony Cyber-shot point-and-shoot camera from the early 2010s using a CCD sensor with vintage digital rendering and imperfect flash exposure.
```

📎 [View executable original prompt →](docs/PROMPTS_ORIGINAL.md#prompt-e40c07de-796f-4564-8f26-54bf595e68ae)

**By** [Ari.prtma ✓](https://x.com/aripratama293) (@aripratama293) · 2K followers

❤️ 3.1K · 🔁 297 · 🔖 2.9K · 👁 2M

<sub>📅 May 25, 2026</sub>

**[▶️ Watch & remix on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)**

---

### 5. Gritty, raw handheld 35mm film aesthetic with natural film grain. Har…

![Type](https://img.shields.io/badge/Video-Seedance%202.0-111111) ![Likes](https://img.shields.io/badge/❤️-3.1K-e0245e)

<div align="center">
<a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts"><img src="https://oss.gptproto.com/growth/x/images/2038698494970433787_0_poster.jpg" width="640" alt="Gritty, raw handheld 35mm film aesthetic with natural film grain. Har…"></a>
<br><sub>▶️ <a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts">Play this video on gptproto.com</a></sub>
</div>

**📝 Prompt**

```
Gritty, raw handheld 35mm film aesthetic with natural film grain. Harsh, direct sunlight creating high-contrast shadows. Handheld tracking shot (3rd person POV/Over-the-shoulder). Atmosphere: dusty, coastal wind, realistic physics.

Audio: Heavy rhythmic breathing, gravel crunching under feet, intense wind howl, sudden silence during the jump, followed by a heavy "thud" impact on plastic.

[TIMELINE SECOND BY SECOND]

0-4s: [Tracking Shot] Handheld camera follows closely behind a slightly obese man in a grey wrinkled tracksuit running towards a cliff edge. Detailed fabric physics: the tracksuit ripples with every step. Dust kicks up from the ground.

4-7s: [The Leap] The man reaches the precipice and jumps with full force. The camera dips slightly with him as he leaves the ground. Real-time transition to a fast downward tracking shot.

7-12s: [Freefall] Subject falls at high velocity. Camera stays locked on his back/side. Physics: wind distorts the fabric of the tracksuit and his skin. Ground approaches rapidly with realistic motion blur.

12-15s: [The Landing] Subject slams into a massive colorful inflatable air-bag at the bottom. Physics: the inflatable deforms deeply upon impact and bounces back. Camera shakes from the force of the landing. Sound of air rushing out.

[STYLE & QUALITY BOOSTERS]

Photorealistic 8K, ultra-detailed textures, cinematic lighting, perfect motion blur, high dynamic range, no artifacts, coherent mult-modal physics, movie-level stability.
```

📎 [View executable original prompt →](docs/PROMPTS_ORIGINAL.md#prompt-6dfc8149-29c6-4407-93ac-825816d1966a)

**By** [TechHalla ✓](https://x.com/techhalla) (@techhalla) · 90.2K followers

❤️ 3.1K · 🔁 230 · 🔖 2.3K · 👁 4.5M

<sub>📅 Mar 30, 2026</sub>

**[▶️ Watch & remix on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)**

---

### 6. SUBJECTS: Subject 1: Lean kung fu chef with short, sharp-cut hair and…

![Type](https://img.shields.io/badge/Video-Seedance%202.0-111111) ![Likes](https://img.shields.io/badge/❤️-3.1K-e0245e)

<div align="center">
<a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts"><img src="https://oss.gptproto.com/growth/x/images/2036407484836094014_0_poster.jpg" width="640" alt="SUBJECTS: Subject 1: Lean kung fu chef with short, sharp-cut hair and…"></a>
<br><sub>▶️ <a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts">Play this video on gptproto.com</a></sub>
</div>

**📝 Prompt**

```
SUBJECTS:
Subject 1: Lean kung fu chef with short, sharp-cut hair and defined jawline. Wears a modernized Chinese chef outfit fused with martial arts attire: fitted sleeveless upper garment with mandarin collar, dark matte fabric with subtle sheen; forearms wrapped with cloth bands for grip; loose tapered pants allowing wide stances; soft-soled shoes for silent footwork. Limbs slightly exaggerated in length; wrists highly flexible, elbows explosive. Movements follow clear martial rhythm (pause → burst → lock), with grounded footwork and fast pivots.

ENVIRONMENT:
Traditional Chinese open-fire stove setup; iron wok fixed on stove; reflective metal counter; blue-and-white porcelain bowl placed in foreground center. Warm overhead light combined with intense dynamic firelight; light oil smoke and visible heat distortion.

MOOD:
High tension, aggressive, but controlled and precise; performance feels intentional and elegant rather than chaotic.

TIMELINE:
0:00-0:02: Extreme close-up, wide-angle POV. The chef stands on the ground behind the counter (counter always between camera and chef), steps in, compresses posture, then snaps his head up to lock eyes with camera. Both hands grip dough—he stretches it in one clean pull, folds once, then pulls again. The dough transitions from a single mass into a small number of even strands.

0:02-0:05: Cut. Slight handheld motion. The chef keeps full control of the noodle bundle in both hands, stretching and aligning the strands into clean, parallel lines through fold → align → stretch cycles. Around 8–12 thin strands extend in smooth arcs, passing close to the lens in clean, readable motion. He finishes the pull and places the aligned noodle bundle neatly onto the counter in front of him.

0:05-0:07: Move (slight recoil then stabilize). The chef lowers into a sliding step behind the counter. One palm sweeps across the surface—shrimp and greens lift and travel in a controlled arc into the wok. The wok remains on the stove; the chef grips only the handle. Any stray ingredient is clearly caught and redirected into the wok.

0:07-0:10: Continuous shot. The chef controls the wok only through handle movement and qi force—no hands enter the wok. He lifts, tilts, and snaps the wok using wrist power; ingredients rise, rotate, and fall back into the wok. His elbow strikes the stove edge—sparks burst. He compresses the wok into the flame, then reverses to pull the flame upward into a second controlled flare.

0:10-0:12: Match move tracking. The chef pivots while holding the wok handle. With the other hand, he picks up the same noodle bundle from the counter and feeds it directly into the wok in one controlled motion. He immediately resumes tossing using the wok—three clean toss cycles (fast → faster → stop). Shrimp, greens, and noodles integrate visibly; sauce coats evenly.

0:12-0:15: Cut to stabilized POV. Sudden full stop. The chef tilts the wok and slides the finished dish into the porcelain bowl—visible: evenly coated noodles, plump shrimp, glossy greens. He lifts and presents the bowl directly toward the camera until it fills the frame. A finger taps the rim—subtle vibration. Steam rises rapidly, expanding until it fully covers the lens for a clean fade-out.
```

📎 [View executable original prompt →](docs/PROMPTS_ORIGINAL.md#prompt-e2390302-fc1a-4d77-8fa2-4f6bd49cf598)

**By** [Latte ✓](https://x.com/0xbisc) (@0xbisc) · 12.1K followers

❤️ 3.1K · 🔁 248 · 🔖 2.2K · 👁 365.1K

<sub>📅 Mar 24, 2026</sub>

**[▶️ Watch & remix on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)**

---

### 7. FORMAT: 15s / 145 BPM / 15 SHOTS / beat-synced routine SUBJECT: @[ima…

![Type](https://img.shields.io/badge/Video-Seedance%202.0-111111) ![Likes](https://img.shields.io/badge/❤️-1.7K-e0245e)

<div align="center">
<a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts"><img src="https://oss.gptproto.com/growth/x/images/2042840039378542846_0_poster.jpg" width="640" alt="FORMAT: 15s / 145 BPM / 15 SHOTS / beat-synced routine SUBJECT: @[ima…"></a>
<br><sub>▶️ <a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts">Play this video on gptproto.com</a></sub>
</div>

**📝 Prompt**

```
FORMAT: 15s / 145 BPM / 15 SHOTS / beat-synced routine

SUBJECT: @[image1] < ATTACH YOUR IMAGE.

WARDROBE: Sleep tee and lounge shorts at home. Tailored jacket, fitted top, trousers, and lace-up shoes outside.

ENVIRONMENT: Tiny apartment, bright fridge glow, rain-dusted hallway, chrome metro, clean office, then a bedroom in cool window light. Everything feels glossy and lived-in.

MOOD: Late-for-work panic, clipped momentum, breathless urgency, then an exhausted exhale.

MUSIC: Fast percussive electro-pop

COLOR LOGIC: Hyperreal Pop Look

STYLE: Ultra-Realistic.

LOGIC RULE: Keep logical consistency in wardrobe, props, locations, and action continuity across all shots.

SHOT 1: ECU, 85mm push-in / 06:50 on the phone screen as it shakes on rumpled sheets. / SFX: alarm, sheet rustle.

SHOT 2: WS, 35mm handheld jolt / Rhythmic cut into her jolting upright through side light, throwing the blanket aside, and planting her feet on the floor in one rushed motion, still in a soft sleep tee and lounge shorts. / SFX: mattress bounce, blanket whip, sharp breath.

SHOT 3: MCU, 50mm slide / Cut on action into face wash at the sink, droplets catching the top light. / SFX: faucet rush, water slap.

SHOT 4: Insert shot, 85mm rack focus / Match cut into the toothbrush held at a natural forward brushing angle against the front teeth, hand relaxed and upright, mint foam and mirror eye. / SFX: bristle scrape, sink drip.

SHOT 5: Interior fridge view, 24mm wide / Object pass into the camera inside the fridge looking out as the door snaps open and her hand darts in, blue fridge light framing a hurried grab for breakfast ingredients. / SFX: fridge hum, bottle clink, shelf rattle.

SHOT 6: Insert shot, 50mm handheld / Rhythmic cut into eggs and toast hitting the pan under warm practical light. / SFX: butter sizzle, chop tap.

SHOT 7: MCU, centered 50mm push-in / Match cut into one rushed bite, a quick clock glance, and an immediate rise from the chair. / SFX: crunch, ceramic clink, chair scrape.

SHOT 8: Bird's-eye insert, 35mm overhead / Cut on action into striped socks snapping on. / SFX: fabric stretch, heel tap.

SHOT 9: MS, 35mm pivot / Camera wipe into a rushed outfit change as the sleep tee disappears under a fitted top and tailored jacket, then her tote, keys, and transit card get scooped up in one messy grab. / SFX: fabric whip, key jingle, zipper pull, bag rustle.

SHOT 10: Insert shot, 50mm overhead / Match cut into lace-up shoes slamming on as the laces yank tight in one impatient pull. / SFX: sole thump, lace tug, short breath.

SHOT 11: WS, 24mm parallax / Whip pan transition into her, now in the tailored outside outfit, rushing through the apartment door into corridor light without breaking stride. / SFX: latch click, rapid footsteps, hallway air.

SHOT 12: MS to CU, 35mm glide into 85mm push-in / Sound bridge into the metro car interior only as she grips the pole, shifts with the carriage sway, checks the passing station lights, and snaps a tense glance toward the closing doors, reflected chrome streaking around her and the city smearing outside the window. / SFX: rail clatter, carriage screech, door warning chime, tight breath.

SHOT 13: Insert to MCU, 50mm snap zoom / Smash cut to the office entrance as her access card hits the reader, the glass door unlocks, and she slips through fast before the chair roll and laptop open. / SFX: badge beep, door click, laptop chime.

SHOT 14: OTS, 35mm handheld / Rhythmic cut into fingers racing across keys, chat windows blinking, coffee by the trackpad, and notifications stacking faster than she clears them. / SFX: keyboard burst, notification ticks, mouse click.

SHOT 15: WS, 50mm pull-out / L-cut with a match from laptop close to apartment re-entry as the jacket drops, work clothes peel away, and she changes back into sleepwear before collapsing into bed in the opening frame shape. / SFX: door shut, bag drop, fabric rustle, blanket rustle, room tone.
```

📎 [View executable original prompt →](docs/PROMPTS_ORIGINAL.md#prompt-c062ccf8-949d-41b5-9bc6-51f6fb50c7e5)

**By** [Sarah ✓](https://x.com/AIwithSarah_) (@AIwithSarah_) · 4.2K followers

❤️ 1.7K · 🔁 130 · 🔖 1.8K · 👁 148.2K

<sub>📅 Apr 11, 2026</sub>

**[▶️ Watch & remix on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)**

---

### 8. [Shot 1: Frontal Menacing Shot] A medium shot of a SWAT officer in fu…

![Type](https://img.shields.io/badge/Video-Seedance%202.0-111111) ![Likes](https://img.shields.io/badge/❤️-1.8K-e0245e)

<div align="center">
<a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts"><img src="https://oss.gptproto.com/growth/x/images/2021509569831170072_0_poster.jpg" width="640" alt="[Shot 1: Frontal Menacing Shot] A medium shot of a SWAT officer in fu…"></a>
<br><sub>▶️ <a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts">Play this video on gptproto.com</a></sub>
</div>

**📝 Prompt**

```
[Shot 1: Frontal Menacing Shot] A medium shot of a SWAT officer in full tactical gear, gas mask, and helmet. He is pointing his assault rifle directly at the camera lens (breaking the fourth wall). He is shouting with visible intensity: "LET THE HOSTAGE GO! DROP THE WEAPON NOW!" [Shot 2: The Threat] Cut to a medium shot of the killer in a dirty tank top, holding a woman in a chokehold. He has a pistol pressed to her head. He is sweating and manic, screaming at the off-screen officer: "STAY BACK! I'LL KILL HER! I SWEAR I'LL DO IT!" [Shot 3: Over-the-Shoulder Resolution] The camera is positioned directly behind the SWAT officer's right shoulder. We see the back of his helmet and his rifle in the foreground. In the distance (mid-ground), the killer is still visible holding the girl. The killer screams one last time: "I'M GONNA DO IT!" after The officer's rifle kicks back with a single sho and hit head enemy. The killer falls instantly. The girl is left standing, shocked but safe. Technical Style: High-shutter speed action, realistic muzzle flashes, handheld camera shake, 24fps, English dialogue.
```

📎 [View executable original prompt →](docs/PROMPTS_ORIGINAL.md#prompt-d3137a8a-2e4b-41fe-8a1c-8767932a63c6)

**By** [Marco "Shikoba" Riccetti ✓](https://x.com/shikoba_86) (@shikoba_86) · 6.7K followers

❤️ 1.8K · 🔁 167 · 🔖 1.1K · 👁 235.8K

<sub>📅 Feb 11, 2026</sub>

**[▶️ Watch & remix on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)**

---

## 📋 All Prompts

### 9. FORMAT: 15s / free rhythm / 1 MATCH CUT / CONTINUOUS MOVE UNTIL MATCH…

![Type](https://img.shields.io/badge/Video-Seedance%202.0-111111)

<div align="center">
<a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts"><img src="https://oss.gptproto.com/growth/x/images/2039380650109649085_0_poster.jpg" width="480" alt="FORMAT: 15s / free rhythm / 1 MATCH CUT / CONTINUOUS MOVE UNTIL MATCH…"></a>
<br><sub>▶️ <a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts">Play this video on gptproto.com</a></sub>
</div>

**📝 Prompt**

```
FORMAT: 15s / free rhythm / 1 MATCH CUT / CONTINUOUS MOVE UNTIL MATCH CUT + IMMEDIATE ACTION FROM FIRST FRAME

SUBJECTS: A lone sword-bearing woman in weathered fur and leather fights a massive polar bear with desperate, two-handed survival movement. The same woman is later revealed at home in loose indoor clothes, where a VR headset appears only after the match cut and is pulled off in one clear motion.
ENVIRONMENT: Frozen wilderness under hard daylight, wind dragging snow across blue-white ice, then a modest lived-in home reached through a precise visual match. Winter glare and visible breath give way to soft clutter, indoor daylight, and a faint game-lit glow.
MOOD: Visceral survival tension snaps into grounded reality without breaking physical continuity.
COLOR LOGIC: Naturalistic Film Print Emulation

TIMELINE:
0:00-0:07: One unbroken handheld move, WS collapsing into MCU as the woman backpedals across the ice and the bear launches through blowing snow. The camera runs beside the leap at eye level, 28mm shifting to 35mm, slightly unstable and close enough to keep both bodies heavy and readable. The bear closes fast while she plants, recoils, and keeps the blade between them. SFX: (howling wind, boots grinding ice, low animal roar, cloth strain, blade cutting air, snow scrape). Hard winter sun side-lights the ice and throws sharp blue shadows.
0:07-0:11: Same unbroken move, no cut, tightening into a dead-on CU as the bear surges into the last inches, claws near her shoulders, jaws filling the frame edge. Right in the middle of the attack, a man's voice calls, Karla... then sharper, KARLA. She answers with a tired off, and on that reaction the world drops into slow motion. Snow drifts almost still, the bear hangs in its strike, and only she keeps moving at normal speed as the camera orbits into her face. Bored, not afraid, she drops the sword and brings both empty hands toward her temples in one smooth interrupt gesture. No headset, visor, or device is visible in the frozen world. Stay continuous until the match cut, keeping the same face size, hand height, head angle, lens distance, and clockwise drift. SFX: (cloth strain building to near impact, a man's voice calling Karla... KARLA, her tired off, then stretched wind fading toward silence). Hard winter sun catches the slowed snow around her face.
0:11-0:15: MATCH CUT. CU to MS. Seamless mid-motion transition as her rising hands cross the same screen position and the frozen close-up becomes the home interior with the same framing and clockwise drift. The motion continues uninterrupted, and now a VR headset is visibly strapped over her eyes for the first time. She grips both sides, pulls it fully off her face, and the camera opens into a medium shot as she drops it above her forehead and steps into a small living room in loose home clothes. The handheld orbit continues, revealing couch edges, scattered blankets, and cold window light as her posture falls into mild annoyance. She turns toward the voice, rolls her eyes upward, and says, What is it. 35mm natural lens, spherical. SFX: (headset strap stretch, plastic rub, quiet room tone, socked foot scrape, faint game audio, her breath settling, her dry voice saying What is it). Indoor daylight replaces the winter contrast.
```

📎 [View executable original prompt →](docs/PROMPTS_ORIGINAL.md#prompt-63b4b91d-4bce-41fd-ad02-8937a105cc4a)

**By** [Kōda ✓](https://x.com/aimikoda) (@aimikoda) · 16.5K followers

❤️ 1.4K · 🔁 144 · 🔖 1K · 👁 176K

<sub>📅 Apr 1, 2026</sub>

**[▶️ Watch & remix on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)**

---

### 10. Fast-paced FPV drone tracking shot from behind, closely following a 3…

![Type](https://img.shields.io/badge/Video-Seedance%202.0-111111)

<div align="center">
<a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts"><img src="https://oss.gptproto.com/growth/x/images/2028068177436176429_0_poster.jpg" width="480" alt="Fast-paced FPV drone tracking shot from behind, closely following a 3…"></a>
<br><sub>▶️ <a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts">Play this video on gptproto.com</a></sub>
</div>

**📝 Prompt**

```
Fast-paced FPV drone tracking shot from behind, closely following a 3D anime-style girl with white hair skateboarding down a steep, winding mountain road at incredibly high speed. Extreme forward momentum, wide-angle perspective, wind rushing effect. The video starts in a vibrant summer setting with lush green mountains, a bright sunny sky, a distant ocean, and brown leaves flying past the camera. At the 3-second mark, a magical wave of frost sweeps forward from the skateboard: the environment seamlessly transforms into a freezing winter landscape. The green grass instantly turns to deep white snow, heavy snowflakes start falling, and the distant mountains become snow-capped peaks. The camera never breaks the intense, smooth, continuous downhill tracking motion. High-octane action, masterpiece 3D animation, photorealistic lighting.
```

📎 [View executable original prompt →](docs/PROMPTS_ORIGINAL.md#prompt-83241a36-fcb8-42e8-b968-8f7b58d2ae17)

**By** [Lex ✓](https://x.com/lexx_aura) (@lexx_aura) · 16.8K followers

❤️ 1.8K · 🔁 202 · 🔖 668 · 👁 157.2K

<sub>📅 Mar 1, 2026</sub>

**[▶️ Watch & remix on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)**

---

### 11. Classic 90s Disney animation style. Scene 1: In an Egyptian palace, t…

![Type](https://img.shields.io/badge/Video-Seedance%202.0-111111)

<div align="center">
<a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts"><img src="https://oss.gptproto.com/growth/x/images/2061102860004098310_0_poster.jpg" width="480" alt="Classic 90s Disney animation style. Scene 1: In an Egyptian palace, t…"></a>
<br><sub>▶️ <a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts">Play this video on gptproto.com</a></sub>
</div>

**📝 Prompt**

```
Classic 90s Disney animation style.

Scene 1: In an Egyptian palace, the camera cuts to the interior of the throne room. We see the majestic jackal god Anubis sitting on his throne, with a group of subordinates (soldiers, advisors, and some lowly servants, all human) kneeling before him. He waves his hand dismissively and says with contempt, "Leave now." He then leans back lazily on the throne, looking bored.

Scene 2: The subordinates obey his command without hesitation and slowly depart, with Anubis watching them. But for the last one, a lowly human servant, Anubis specifically instructs, "You, servant, wait." The servant turns around, looking confused and surprised, not understanding what the majestic Anubis could possibly want.

Scene 3: The other subordinates have left. Anubis says, "Come here." The servant, nervous and still bewildered, walks toward Anubis.

Scene 4: Anubis pulls a bouquet of flowers from behind the throne and, with a casual expression, hands them to the surprised servant. He turns his head slightly, looking a bit embarrassed and avoiding eye contact, saying, "Take them."

Scene 5: The servant takes the bouquet, still looking confused. Anubis, still not looking at him, waves his hand and says, "You may go." The servant nods, takes the bouquet, and leaves with a bewildered expression.

Scene 6: Anubis watches the servant leave. His expression remains casual, but a faint smile appears at the corner of his mouth. He rests his chin on his hand, watching the servant depart, seemingly quite fond of him.

Anubis is muscular, wearing rings and earrings on his arms, neck, and ears. He is shirtless. His voice is deep and magnetic. Audio is in English.
```

📎 [View executable original prompt →](docs/PROMPTS_ORIGINAL.md#prompt-95bc8679-3b0b-4245-b336-7056639e0b0b)

**By** [migrok ✓](https://x.com/migrok293703) (@migrok293703) · 3.7K followers

❤️ 1.7K · 🔁 105 · 🔖 719 · 👁 65.6K

<sub>📅 May 31, 2026</sub>

**[▶️ Watch & remix on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)**

---

### 12. { "style": "stylized 3D animation, hyperreal pop, squash-and-stretch"…

![Type](https://img.shields.io/badge/Video-Seedance%202.0-111111)

<div align="center">
<a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts"><img src="https://oss.gptproto.com/growth/x/images/2043411176181125604_0_poster.jpg" width="480" alt="{ &quot;style&quot;: &quot;stylized 3D animation, hyperreal pop, squash-and-stretch&quot;…"></a>
<br><sub>▶️ <a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts">Play this video on gptproto.com</a></sub>
</div>

**📝 Prompt**

```
{
  "style": "stylized 3D animation, hyperreal pop, squash-and-stretch",
  "mood": "fast slapstick mischief with fake wins and payoff",
  "characters": {
    "child": "round-faced, huge eyes, golden-blond ponytail, pink striped dress",
    "vendor": "tall man, curled mustache, crimson vest, tilted cap, brass ice cream paddle"
  },
  "environment": {
    "location": "sunlit stone courtyard in hillside town",
    "details": "flower archways, mosaic fountain, brass cart, cobblestones, warm late-afternoon light"
  },
  "timeline": [
    {
      "time": "0:00-0:04",
      "action": "Ice cream trick reveals fake outs; cone appears and disappears, quick miss gag",
      "sfx": "gasp, whoosh, chuckle, bell"
    },
    {
      "time": "0:04-0:09",
      "action": "Switch trick, scramble chase, fake victory then cone removed",
      "sfx": "swish, skid, laughter, chime cut"
    },
    {
      "time": "0:09-0:15",
      "action": "Public tease, then real cone given; calm payoff and taste moment",
      "sfx": "crowd laugh, bell, soft chime, applause"
    }
  ]
}
```

📎 [View executable original prompt →](docs/PROMPTS_ORIGINAL.md#prompt-7aa6fd64-10b8-460c-85d8-acf54533c4ea)

**By** [Linus ✦ Ekenstam ✓](https://x.com/LinusEkenstam) (@LinusEkenstam) · 239.1K followers

❤️ 783 · 🔁 78 · 🔖 915 · 👁 80.6K

<sub>📅 Apr 12, 2026</sub>

**[▶️ Watch & remix on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)**

---

### 13. FORMAT: cinematic continuous shot / motivated camera movement / 15s S…

![Type](https://img.shields.io/badge/Video-Seedance%202.0-111111)

<div align="center">
<a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts"><img src="https://oss.gptproto.com/growth/x/images/2032566288967499857_0_poster.jpg" width="480" alt="FORMAT: cinematic continuous shot / motivated camera movement / 15s S…"></a>
<br><sub>▶️ <a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts">Play this video on gptproto.com</a></sub>
</div>

**📝 Prompt**

```
FORMAT: cinematic continuous shot / motivated camera movement / 15s

SCENE
A crowded medieval market street inside a stone city at dusk. Narrow cobblestone road, wooden stalls, hanging banners, livestock moving through the crowd. Warm torchlight reflects on damp stones while light mist drifts between buildings.

CAMERA CONCEPT
A continuous motivated camera move where each new moving subject entering the frame redirects the camera’s attention. Every motion naturally hands the focus to the next subject.

SEQUENCE

0:00–0:03  
Close street-level view of a market stall.  
CAMERA FOCUS: a woman bargaining with a merchant while selecting fruit from a wooden basket. She hands coins to the merchant.

0:03–0:05  
A horse pulling a heavy wooden cart suddenly crosses the foreground from the opposite direction, briefly blocking the frame.  
CAMERA SHIFT: the camera catches the cart and begins tracking it as it moves through the market.

0:05–0:07  
The cart squeezes between stalls and brushes past a hanging banner. The banner swings violently across the frame.  
CAMERA SHIFT: as the banner clears the view it reveals chickens scattering across the cobblestone street.

0:07–0:09  
A street boy runs after the escaping chickens, chasing them through the crowd.  
CAMERA SHIFT: the camera begins following the boy as he runs between villagers.

0:09–0:12  
The boy rushes past a tavern entrance and disappears into the crowd.  
CAMERA SHIFT: the tavern door suddenly swings open as someone exits.

0:12–0:15  
The camera glides through the open doorway into the dim tavern interior. Lantern light flickers across wooden tables and drifting smoke.  
CAMERA FINAL FOCUS: a lone armored knight sitting quietly at a corner table, a massive sword leaning beside the bench as the knight slowly lifts his gaze.

STYLE
Layered medieval street life, natural crowd choreography, continuous motivated camera movement.

LIGHTING
Warm torchlight outside, dim lantern glow inside the tavern, smoke and dust catching the light.

QUALITY
photorealistic, cinematic lighting, grounded camera motion, rich medieval atmosphere, highly detailed
```

📎 [View executable original prompt →](docs/PROMPTS_ORIGINAL.md#prompt-92c72c8f-4ff2-4c88-af52-3c345f4059ea)

**By** [Kōda ✓](https://x.com/aimikoda) (@aimikoda) · 16.5K followers

❤️ 754 · 🔁 82 · 🔖 841 · 👁 153K

<sub>📅 Mar 13, 2026</sub>

**[▶️ Watch & remix on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)**

---

### 14. ROCKET SURF. STYLE: Gritty Cine Verité, 35mm handheld, natural shake.…

![Type](https://img.shields.io/badge/Video-Seedance%202.0-111111)

<div align="center">
<a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts"><img src="https://oss.gptproto.com/growth/x/images/2039308016558784836_0_poster.jpg" width="480" alt="ROCKET SURF. STYLE: Gritty Cine Verité, 35mm handheld, natural shake.…"></a>
<br><sub>▶️ <a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts">Play this video on gptproto.com</a></sub>
</div>

**📝 Prompt**

```
ROCKET SURF. 
STYLE: Gritty Cine Verité,  35mm handheld, natural shake. Continuous tracking shot. No cuts. All real-time. 

LIGHTING: Bright, high-altitude sun, pure blue sky. 

AUDIO:  Rocket engine roar, wind, fiberglass creak.  

TIMELINE: 0-3s:  Guy in jeans and a black t-shirt is barely holding on the side of an active SpaceX rocket at 12,000 feet. The rocket is climbing. 3-7s:  Hard zoom in cut on his face. His hair is plastered straight back. The ground is falling away below. 7-12s: The rocket hits max Q. The whole booster shakes violently.  He grips tightly, his knees absorb it perfectly. 12-15s: He pulls a  beer can out of his hoodie pocket, cracks it open. Takes one sip, cheers and yells: "Worth it!". Hard cut. 

QUALITY: 8K photorealistic, correct physics, fabric motion blur, no artifacts.
```

📎 [View executable original prompt →](docs/PROMPTS_ORIGINAL.md#prompt-5ff009c5-a020-405b-9541-3dff09db396e)

**By** [Alex Patrascu ✓](https://x.com/maxescu) (@maxescu) · 36.6K followers

❤️ 1.3K · 🔁 112 · 🔖 468 · 👁 266.1K

<sub>📅 Apr 1, 2026</sub>

**[▶️ Watch & remix on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)**

---

### 15. A cinematic and chaotic tracking shot with handheld camera motion and…

![Type](https://img.shields.io/badge/Video-Seedance%202.0-111111)

<div align="center">
<a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts"><img src="https://oss.gptproto.com/growth/x/images/2023803487515979909_0_poster.jpg" width="480" alt="A cinematic and chaotic tracking shot with handheld camera motion and…"></a>
<br><sub>▶️ <a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts">Play this video on gptproto.com</a></sub>
</div>

**📝 Prompt**

```
A cinematic and chaotic tracking shot with handheld camera motion and camera shake shows an explorer holding an ancient scarab artifact. They are running away from a giant pursuing mummy. Debris and dust clouds can be seen. The mummy is causing sections of the ancient wall to crumble. The explorer runs away frantically while occasionally looking back, you can hear her heavy breathing. She continues running until she narrowly escapes once the mummy almost grabs her but it hits a pillar causing it to fall on itself, the explorer then continues running into the entrance of a tomb.
```

📎 [View executable original prompt →](docs/PROMPTS_ORIGINAL.md#prompt-b177a667-89e2-4afb-97c2-5d929a65b549)

**By** [Travis Davids ✓](https://x.com/MrDavids1) (@MrDavids1) · 22.2K followers

❤️ 1.1K · 🔁 115 · 🔖 507 · 👁 70.1K

<sub>📅 Feb 17, 2026</sub>

**[▶️ Watch & remix on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)**

---

### 16. Androgenic plots his revenge after getting his wig snatched. Make my…

![Type](https://img.shields.io/badge/Video-Seedance%202.0-111111)

<div align="center">
<a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts"><img src="https://oss.gptproto.com/growth/x/images/2025581420341809187_0_poster.jpg" width="480" alt="Androgenic plots his revenge after getting his wig snatched. Make my…"></a>
<br><sub>▶️ <a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts">Play this video on gptproto.com</a></sub>
</div>

**📝 Prompt**

```
Androgenic plots his revenge after getting his wig snatched. Make my cortisol spike.
```

📎 [View executable original prompt →](docs/PROMPTS_ORIGINAL.md#prompt-fceb18ce-3548-4d63-b6b3-f217a286303a)

**By** [TBC ✓](https://x.com/TBC_on_X) (@TBC_on_X) · 33.3K followers

❤️ 1.2K · 🔁 114 · 🔖 355 · 👁 108.2K

<sub>📅 Feb 22, 2026</sub>

**[▶️ Watch & remix on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)**

---

### 17. Ultra-wide-angle macro FPV body-hugging tracking shot chasing a cat.…

![Type](https://img.shields.io/badge/Video-Seedance%202.0-111111)

<div align="center">
<a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts"><img src="https://oss.gptproto.com/growth/x/images/2030046324062609599_0_poster.jpg" width="480" alt="Ultra-wide-angle macro FPV body-hugging tracking shot chasing a cat.…"></a>
<br><sub>▶️ <a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts">Play this video on gptproto.com</a></sub>
</div>

**📝 Prompt**

```
Ultra-wide-angle macro FPV body-hugging tracking shot chasing a cat.
The subject is never shown fully, only fragmented close-ups pass the lens:the tip of an ear, whiskers, the edge of a paw, fur on the back
brushing across the camera. The image performs rapid focus shifts beetween the trembling ear/whiskers and nearby environmental
obstacles. 120fps high-frame-rate cinematography captures the highfrequency vibration and subtle tremors when the cat runs and
lands.

Setting: an underground parking garage.
Rough concrete floor, numbered pillars with unreadable markings, puddles are tracks reflecting light. The air is filled with fine dust
and condensation mist. Distant headlights and cold white ceiling LEDSs create sweeping contrast lighting. The space echoes, empty
oppressive, and cavernous.

Movement dynamics are highly irregular.
The cat follows a nonlinear predator path through narrow gaps between pillars and parked cars, sharp 90° turns, explosive ground-level
acceleration, tight lateral rolls skimming past door seams and guardreail edges. The camera follows with high-frequency vibration
synchronized with the rhythm of the cat's footsteps, producing forced micrkes. Exaggerated motion parallax makes pillars and
wheels rapidly enlarge and streak past the lens.

Key physical interaction moment:
An invisible downwash gust (from a passing vehicle and ventiilation airflow) whips loose parking tickets, thin plastic bags,and fine dust
from the ground into a spirgling tunnel. As the cat bursts through, screaps of paper stretch into radial speed lines under fisheye distortion
A tire rolls through a puddle, splashing fine droplets; water beeads create realistic refraction and caustics in front of the lerns.

Climactic moment:
A car headlight suddenly sweeps across the scene. The wet ground flashes le a mirror. The cat's paws slip briefly into a chaotic spiral
loss of control, not injured, just a dangerous skid. The footage instantlyes to 120fps slow motion: claws gripping the ground, fur
trembling, droplets flinging outward in arcs, surface tension sstretching the water into threads

Immediately afterward the motion returns to extreme speed. The cat ssprints along the edge of a ramp, hugging the wall, and precisely
darts into a half-open maintenance door / narrow fence gap, escaping

Atmosphere: claustrophobic, frantic, life-or-death tension-but ultimately a successful escape
Sound design suggests sharp rushing wind, echoing tire-water splashes, andmetallic vibrations as guardrails whip past. The scene ends
as the cat leaps into a safe shadowy corner, while the camera's residual vibrations slowly settle into stillness
```

📎 [View executable original prompt →](docs/PROMPTS_ORIGINAL.md#prompt-45f4a966-8169-418b-9da7-b623acd81498)

**By** [el.cine ✓](https://x.com/EHuanglu) (@EHuanglu) · 131.3K followers

❤️ 753 · 🔁 58 · 🔖 500 · 👁 93.7K

<sub>📅 Mar 6, 2026</sub>

**[▶️ Watch & remix on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)**

---

### 18. Film stock / Lens: Digital 4K game engine render, fixed wide-side-vie…

![Type](https://img.shields.io/badge/Video-Seedance%202.0-111111)

<div align="center">
<a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts"><img src="https://oss.gptproto.com/growth/x/images/2052783860228735260_0_poster.jpg" width="480" alt="Film stock / Lens: Digital 4K game engine render, fixed wide-side-vie…"></a>
<br><sub>▶️ <a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts">Play this video on gptproto.com</a></sub>
</div>

**📝 Prompt**

```
Film stock / Lens: Digital 4K game engine render, fixed wide-side-view fighting game camera, 35mm lens for deep focus.
Color Grade: High contrast, vibrant "Next-Gen" gaming palette, dramatic stadium lighting coming through the central tunnel.
Atmosphere: Charged, competitive, with floating dust particles and lens flares from the overhead stadium lights.

Audio Style: Immersive spatial sound design. Heavy thudding impacts, bone-crunching SFX, whooshing air for special moves, and a final heavy wooden crash.

IMAGE REFERENCES / LEGEND

[escene] : The environment reference (fighting arena locker room and stadium entrance).

[player1] : The fighter on the left (white tracksuit). Keep exact face and clothing as reference.

[player2] : The fighter on the right (blue/green kit). Keep exact face and clothing as reference.

TIMELINE SECOND BY SECOND
0-3s: [Wide Shot] Fighter in white [player1] and fighter in blue [player2] face each other in fighting stances in the center of the arena [escene]. Health bars and "ROUND 1" UI appear at the top. The fighter in white throws a low kick; the fighter in blue blocks with a blue particle effect impact.

3-8s: [Action Sequence] Fast-paced Mortal Kombat style combat. The fighter in white performs a spinning backfist; the fighter in blue ducks and counters with an uppercut.

8-12s: [Special Move] The fighter in blue [player2] quickly grabs a nearby wooden training table. He swings it in a wide arc. Physics interaction: the table reflects the overhead lights as it moves.

12-15s: [Closing Shot] The table connects with the head of the fighter in white [player1] with a heavy impact. The fighter in white collapses to the floor in a ragdoll physics motion. The fighter in blue stands over him as "K.O." flashes on the screen. Sound fade to a heavy bass impact.

STYLE & QUALITY BOOSTERS
Photorealistic 8K, ultra-detailed fabric textures on the kits, cinematic lighting, perfect motion blur for the fight moves, high dynamic range, no artifacts. Exact same faces and outfits as [player1] and [player2] throughout, movie-level stable facial features.
```

📎 [View executable original prompt →](docs/PROMPTS_ORIGINAL.md#prompt-f90d955b-df6a-4b82-9259-0424be5be39c)

**By** [TechHalla ✓](https://x.com/techhalla) (@techhalla) · 90.2K followers

❤️ 657 · 🔁 89 · 🔖 411 · 👁 121.1K

<sub>📅 May 8, 2026</sub>

**[▶️ Watch & remix on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)**

---

### 19. aesthetic: Raw 35mm handheld, high altitude sun haze. One unbroken co…

![Type](https://img.shields.io/badge/Video-Seedance%202.0-111111)

<div align="center">
<a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts"><img src="https://oss.gptproto.com/growth/x/images/2039639802824347878_0_poster.jpg" width="480" alt="aesthetic: Raw 35mm handheld, high altitude sun haze. One unbroken co…"></a>
<br><sub>▶️ <a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts">Play this video on gptproto.com</a></sub>
</div>

**📝 Prompt**

```
aesthetic: Raw 35mm handheld, high altitude sun haze. One unbroken continuous tracking shot. No cuts. All real time. audio: Full constant jet engine roar, wind blast, no other sound. 

timeline: 
- 0-3s: Normal guy in baggy cargo shorts and flip flops is standing perfectly relaxed balancing on top of the wing of an F16 doing 350mph at 10,000 feet. 
- 3-7s: The pilot leans out of the canopy, gives a thumbs up towards the guy on the wing. The guy leans forward slightly, smiles and returns the thumbs up. 
- 7-12s: He does a completely casual, perfectly clean full backflip. No hands. He doesn't grab anything. Lands exactly back on the exact same spot on the wing. He doesn't even stumble. 
- 12-15s: He brushes a tiny bit of dust off his shorts. Gives a bored little thumbs up straight to the camera. Hard cut. 

quality: 8K photorealistic, correct fabric motion blur, natural physics, no uncanny valley, no artifacts.
```

📎 [View executable original prompt →](docs/PROMPTS_ORIGINAL.md#prompt-7c9d6b78-418f-4bc9-80fc-673ae9e8e829)

**By** [Alex Patrascu ✓](https://x.com/maxescu) (@maxescu) · 36.6K followers

❤️ 639 · 🔁 59 · 🔖 444 · 👁 95.7K

<sub>📅 Apr 2, 2026</sub>

**[▶️ Watch & remix on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)**

---

### 20. Main Character: A beautiful Korean high school girl wearing a realist…

![Type](https://img.shields.io/badge/Video-Seedance%202.0-111111)

<div align="center">
<a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts"><img src="https://oss.gptproto.com/growth/x/images/2058146351326593219_0_poster.jpg" width="480" alt="Main Character: A beautiful Korean high school girl wearing a realist…"></a>
<br><sub>▶️ <a href="https://gptproto.com?utm_source=github&utm_medium=image&utm_campaign=awesome-seedance-2-0-prompts">Play this video on gptproto.com</a></sub>
</div>

**📝 Prompt**

```
Main Character:
A beautiful Korean high school girl wearing a realistic Korean summer school uniform (하복). Natural skin texture with no beauty retouching. Hair becomes messy during combat, with expressive emotional acting. Facial proportions remain fully consistent throughout all shots. She begins timid and shocked, then gradually becomes determined and defiant.

0–1.5 seconds:
The female lead quietly studies at her desk. Four delinquent schoolgirls surround her and begin bullying her. They mock her for studying, aggressively sweep her books off the desk, and shove her shoulders. Wide-angle handheld camera movement. Books fly in slow motion. Tense classroom atmosphere. Realistic school bullying energy, shaky camera motion, cinematic realism.

1.5–3 seconds:
Close-up of the protagonist’s face. She slowly stands up. Her expression shifts from fear to cold determination. The bullies remain blurred in shallow depth of field behind her. A 0.5-second moment of silence. Slow cinematic push-in shot. Silence except for ambient classroom sound and tense breathing.

3–5 seconds:
First confrontation. One bully throws a punch; the protagonist blocks and counters with a strike to the stomach. Another attacker rushes from the side; she dodges and retaliates with a spinning elbow strike. Handheld tracking shots follow the motion closely. Dynamic motion blur, impact camera shake, realistic fight choreography. No supernatural effects.

5–8 seconds:
The remaining two bullies attack simultaneously with punches and kicks. The protagonist uses quick footwork and evasive movement to avoid hits. Dynamic 360-degree rotating camera movement. Rapid chained kicks and elbow attacks knock the attackers down. Classroom desks and objects shift from the impacts. Intense cinematic action pacing.

8–10 seconds:
The final attacker charges toward the protagonist. The female lead leaps high into the air. Low-angle shot from the ground. 30% slow motion. Hair and skirt flow naturally. Dramatic cinematic lighting. Floating dust and airborne particles drift slowly through the air.

10–12 seconds:
Midair 360-degree spinning kick. Slow-motion impact directly hits the final bully’s chest. Extreme close-up of the collision. The bully is launched backward into the classroom wall. Debris and dust explode outward. All bullies collapse onto the floor. Immediately after landing, the camera speed snaps back to normal for dramatic impact.

12–14 seconds:
Victory moment. The protagonist stands alone in the center of the classroom, breathing heavily. The four bullies lie defeated around the room. The camera slowly and dramatically pushes toward her face. Soft cinematic bokeh background. Her expression is determined yet emotional.

14–15 seconds:
Freeze-frame close-up. The protagonist stares directly into the camera and calmly says in Korean:
(“I need to get into college.”)
Delivery is realistic and emotionally restrained. After the line ends, she returns to looking like an ordinary student. Calm, emotional ending. The film emphasizes the intense academic pressure faced by Korean students.

Style References:
Korean action cinema, ultra-realistic cinematography, cinematic handheld action, emotional realism, grounded fight choreography, realistic Korean classroom atmosphere, high-budget Netflix K-drama aesthetics, cinematic lighting, dramatic silence beats, powerful female protagonist, grounded emotional tone.

Negative Prompt:
Cartoon, anime, CGI-looking textures, fake skin, extra limbs, distorted faces, exaggerated fantasy armor, unrealistic physics, low quality, blurry faces, overexposed lighting, comedic tone, childish style, fantasy classroom, male protagonist, bad anatomy, unrealistic body proportions, supernatural effects, glowing eyes, energy auras, magic.
```

📎 [View executable original prompt →](docs/PROMPTS_ORIGINAL.md#prompt-26f1ab37-3583-4095-898f-700449fbba68)

**By** [Ai Arainz ✓](https://x.com/iam_mian7) (@iam_mian7) · 37K followers

❤️ 908 · 🔁 46 · 🔖 115 · 👁 63.8K

<sub>📅 May 23, 2026</sub>

**[▶️ Watch & remix on gptproto.com →](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)**

---

## 🤝 How to Contribute

1. Open a [**new prompt submission**](https://github.com/sparkle027/awesome-seedance-2-0-prompts/issues/new?template=submit-prompt.yml).
2. Fill in the prompt, the output video/image link, and the original source.
3. We review and add it — credited to the original author.

See docs/CONTRIBUTING.md for details.

---

## 📄 License

Released under CC BY 4.0. Prompts are aggregated from public posts on X and credited to their authors — see LICENSE.

---

## 🙏 Acknowledgements

Huge thanks to the X/Twitter creators whose Seedance 2.0 experiments make this list possible, and to gptproto.com for powering the gallery and API.

---

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=sparkle027/awesome-seedance-2-0-prompts&type=Date)](https://star-history.com/#sparkle027/awesome-seedance-2-0-prompts&Date)

---

<div align="center">

**[🌐 Gallery](https://gptproto.com?utm_source=github&utm_medium=cta&utm_campaign=awesome-seedance-2-0-prompts)** • **[📝 Submit a prompt](https://github.com/sparkle027/awesome-seedance-2-0-prompts/issues/new?template=submit-prompt.yml)** • **[⭐ Star the repo](https://github.com/sparkle027/awesome-seedance-2-0-prompts)**

<sub>🤖 Auto-generated from the gptproto materials library · gptproto.com</sub>

</div>
