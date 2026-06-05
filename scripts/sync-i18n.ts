/**
 * Translate README UI strings (en -> 10 locales) via gptproto Gemini API.
 * Writes scripts/i18n/locales/{locale}.json then run: pnpm generate
 */
import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SUPPORTED_LOCALES, type Locale } from "./utils/config.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const LOCALES_DIR = path.join(__dirname, "i18n/locales");

// Load parent monorepo .env if present
const parentEnv = path.resolve(ROOT, "../.env");
if (fs.existsSync(parentEnv)) {
  const text = fs.readFileSync(parentEnv, "utf-8");
  for (const line of text.split("\n")) {
    const m = line.match(/^GPTPROTO_API_KEY=(.+)$/);
    if (m && !process.env.GPTPROTO_API_KEY) process.env.GPTPROTO_API_KEY = m[1].trim();
  }
}

const API_URL =
  "https://gptproto.com/v1beta/models/gemini-3.1-flash-lite-preview:generateContent";

const TARGET: Record<Exclude<Locale, "en">, string> = {
  es: "Spanish (Español)",
  pt: "Portuguese (Português)",
  ja: "Japanese (日本語)",
  ko: "Korean (한국어)",
  de: "German (Deutsch)",
  fr: "French (Français)",
  tr: "Turkish (Türkçe)",
  "zh-TW": "Traditional Chinese (繁體中文)",
  "zh-CN": "Simplified Chinese (简体中文)",
  ru: "Russian (Русский)",
};

/** English source — keep in sync with scripts/utils/i18n.ts `en` */
const enSource = {
  langName: "English",
  langView: "Default",
  subtitle:
    "A curated, regularly-updated collection of real {model} AI video prompts — each with its output and original source.",
  starCta:
    "Find this useful? **Star the repo** to follow new prompts — updated as fresh {model} videos trend on X.",
  browseGalleryBanner: "Browse the full gallery with playable videos on gptproto.com →",
  gallerySectionTitle: "Browse the Full Gallery",
  galleryIntro:
    "Prompts here are a snapshot. The live gallery on **gptproto.com** plays every video inline, lets you search, and copies any prompt in one click.",
  tableThisReadme: "This README",
  tableSite: "gptproto.com",
  rowPlayback: "Playable video previews",
  rowSearch: "Search & filter",
  rowCopy: "One-click copy",
  rowApi: "Generate via API",
  cmpReadmePlayback: "Thumbnails only",
  cmpSitePlayback: "Inline playback",
  cmpReadmeSearch: "Ctrl/⌘-F",
  cmpSiteSearch: "Full-text + filters",
  cmpReadmeCopy: "Manual select",
  cmpSiteCopy: "Copy button",
  cmpReadmeApi: "—",
  cmpSiteApi: "{model} API",
  galleryCta: "Open the gallery on gptproto.com",
  tocTitle: "Contents",
  tocGallery: "Browse the Full Gallery",
  tocWhatIs: "What is {model}?",
  tocApi: "Use the {model} API",
  tocNews: "News",
  tocStats: "Statistics",
  tocFeatured: "Featured Prompts",
  tocAll: "All Prompts",
  tocContribute: "How to Contribute",
  tocLicense: "License",
  tocAck: "Acknowledgements",
  whatIsTitle: "What is {model}?",
  whatIsP1:
    "{model} is a state-of-the-art AI video generation model. Give it a text prompt (text-to-video) or a starting image (image-to-video) and it produces short, high-motion, cinematic clips with coherent physics, camera moves, and characters.",
  whatIsP2:
    "This list collects prompts that actually went viral on X — so you can see the exact wording behind standout clips, then remix it for your own.",
  whatIsBullet1: "Text-to-video & image-to-video from a single prompt",
  whatIsBullet2: "Cinematic camera motion and consistent subjects",
  whatIsBullet3: "Fast iteration — tweak a line, regenerate",
  whatIsBullet4: "Available through the gptproto {model} API",
  apiTitle: "Use the {model} API",
  apiCta: "Get an API key on gptproto.com →",
  newsTitle: "News",
  newsLaunched: "Launched the list with curated {model} prompts. ⭐ Star to follow updates.",
  statsTitle: "Statistics",
  statsMetric: "Metric",
  statsValue: "Value",
  statsCurated: "Curated prompts",
  statsModel: "Model",
  statsUpdated: "Last updated",
  featuredTitle: "Featured Prompts",
  featuredSubtitle: "The most-loved {model} clips, by engagement.",
  allPromptsTitle: "All Prompts",
  moreInGallery: "more prompts in the gallery",
  promptLabel: "Prompt",
  imagePromptLabel: "Image prompt",
  videoPromptLabel: "Video prompt",
  viewOriginal: "View executable original prompt →",
  fallbackNote: "Translation pending — showing source text",
  playOnSite: "Play this video on gptproto.com",
  watchRemix: "Watch & remix on gptproto.com →",
  by: "By",
  followers: "followers",
  contributeTitle: "How to Contribute",
  contributeSteps: [
    "Open a **new prompt submission**.",
    "Fill in the prompt, the output video/image link, and the original source.",
    "We review and add it — credited to the original author.",
  ],
  contributeSee: "See docs/CONTRIBUTING.md for details.",
  licenseTitle: "License",
  licenseBody:
    "Released under CC BY 4.0. Prompts are aggregated from public posts on X and credited to their authors — see LICENSE.",
  ackTitle: "Acknowledgements",
  ackBody:
    "Huge thanks to the X/Twitter creators whose {model} experiments make this list possible, and to gptproto.com for powering the gallery and API.",
  footerGallery: "Gallery",
  footerSubmit: "Submit a prompt",
  footerStar: "Star the repo",
  autoGenerated: "Auto-generated from the gptproto materials library",
  originalDocTitle: "Original Prompts (executable source layer)",
  originalDocIntro:
    "This file lists **source-layer** prompts only (`text` / `image` / `video` from the materials API). They do not change with language. Localized reading versions live in README*.md (translation layer, `?lang=`).",
  originalDocToc: "Prompt index",
  sourceLocale: "Source locale",
  executableOriginalsLink: "Executable originals",
};

async function callGemini(locale: Locale, targetLabel: string): Promise<typeof enSource> {
  const key = process.env.GPTPROTO_API_KEY;
  if (!key) throw new Error("GPTPROTO_API_KEY missing in .env");

  const prompt = `You are a technical translator for an open-source GitHub README about AI video prompts.

Translate the following JSON string values from English to ${targetLabel} (locale code: ${locale}).

Rules:
- Return ONLY valid JSON with the exact same keys and structure as the input.
- Keep the placeholder {model} unchanged everywhere it appears.
- Keep brand names unchanged: gptproto.com, gptproto, Seedance, X, GitHub, CC BY 4.0, LICENSE, docs/CONTRIBUTING.md, README*.md.
- Preserve Markdown: **bold**, backticks, → arrows.
- contributeSteps must remain a JSON array of exactly 3 strings.
- langName and langView should be in the target language (short UI labels).
- Natural, fluent marketing/technical tone for native speakers.

Input JSON:
${JSON.stringify(enSource, null, 2)}`;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        thinkingConfig: { includeThoughts: false, thinkingLevel: "LOW" },
      },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini ${res.status} for ${locale}: ${err.slice(0, 500)}`);
  }

  const data = (await res.json()) as Record<string, unknown>;
  const candidates = data.candidates as
    | Array<{ content?: { parts?: Array<{ text?: string }> } }>
    | undefined;
  const text = candidates?.[0]?.content?.parts?.map((p) => p.text).join("") ?? "";
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error(`No JSON in Gemini response for ${locale}`);
  return JSON.parse(match[0]) as typeof enSource;
}

async function main() {
  const only = process.argv[2] as Locale | undefined;
  const locales = only
    ? (only === "en" ? [] : [only])
    : (SUPPORTED_LOCALES.filter((l) => l !== "en") as Exclude<Locale, "en">[]);

  fs.mkdirSync(LOCALES_DIR, { recursive: true });
  fs.writeFileSync(path.join(LOCALES_DIR, "en.json"), JSON.stringify(enSource, null, 2));

  for (const locale of locales) {
    if (locale === "en") continue;
    console.log(`🌐 Translating UI strings → ${locale} (${TARGET[locale]})…`);
    const translated = await callGemini(locale, TARGET[locale]);
    const out = path.join(LOCALES_DIR, `${locale}.json`);
    fs.writeFileSync(out, JSON.stringify(translated, null, 2) + "\n", "utf-8");
    console.log(`   ✅ ${out}`);
    await new Promise((r) => setTimeout(r, 800));
  }

  console.log("\n✨ Done. Run: pnpm generate");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
