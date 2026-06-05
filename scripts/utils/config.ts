/**
 * Single source of truth for the generator.
 * Brand copy, locales, the backlink target, UTM tagging and display caps all live here.
 */

// ---------------------------------------------------------------------------
// Locales (mirror gptproto-growth/src/lib/translation/fields.ts)
// ---------------------------------------------------------------------------

export const SUPPORTED_LOCALES = [
  "en",
  "es",
  "pt",
  "ja",
  "ko",
  "de",
  "fr",
  "tr",
  "zh-TW",
  "zh-CN",
  "ru",
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

/** README.md uses English translation layer (`?lang=en`). */
export const DEFAULT_README_LOCALE: Locale = "en";

export const LOCALE_README_FILES: Record<Locale, string> = {
  en: "README.md",
  es: "README_es.md",
  pt: "README_pt.md",
  ja: "README_ja.md",
  ko: "README_ko.md",
  de: "README_de.md",
  fr: "README_fr.md",
  tr: "README_tr.md",
  "zh-TW": "README_zh-TW.md",
  "zh-CN": "README_zh-CN.md",
  ru: "README_ru.md",
};

export function readmePathForLocale(locale: Locale, rootDir: string): string {
  return `${rootDir}/${LOCALE_README_FILES[locale]}`;
}

/** Path to the canonical executable-prompt archive (source layer only). */
export const PROMPTS_ORIGINAL_FILE = "docs/PROMPTS_ORIGINAL.md";

// ---------------------------------------------------------------------------
// Product / brand
// ---------------------------------------------------------------------------

/** Public website that receives every backlink (no trailing slash). */
export const SITE_URL = (process.env.SITE_URL || "https://gptproto.com").replace(/\/$/, "");

/** GitHub "owner/repo" — used for badges, contribution links and star history. */
export const GITHUB_REPO = process.env.GITHUB_REPO || "sparkle027/awesome-seedance-2-0-prompts";

/** The flagship model this repo targets. */
export const MODEL_SLUG = process.env.MODEL_SLUG || "seedance-2-0";
export const MODEL_NAME = process.env.MODEL_NAME || "Seedance 2.0";

/** Campaign tag shared by every UTM-tagged link. */
const UTM_CAMPAIGN = "awesome-seedance-2-0-prompts";

// ---------------------------------------------------------------------------
// Data source
// ---------------------------------------------------------------------------

/** Base URL of the gptproto materials API. */
export const MATERIALS_API_BASE = (
  process.env.MATERIALS_API_BASE || "http://localhost:3000"
).replace(/\/$/, "");

/** When set, regenerate from data/snapshot.json instead of hitting the API. */
export const OFFLINE = process.env.OFFLINE === "1" || process.env.OFFLINE === "true";

// ---------------------------------------------------------------------------
// Display caps
// ---------------------------------------------------------------------------

/** Top-N prompts (by hot score) rendered as full "Featured" cards. */
export const FEATURED_COUNT = 8;

/** Max prompts rendered in the "All Prompts" section before linking to the site. */
export const MAX_ALL_PROMPTS = 100;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export type UtmMedium = "banner" | "image" | "readme" | "api" | "cta";

/**
 * Build a UTM-tagged URL on the product site.
 * Every outbound link to gptproto.com goes through here so attribution is consistent.
 */
export function siteUrl(path = "", medium: UtmMedium = "readme"): string {
  const base = path ? `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}` : SITE_URL;
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}utm_source=github&utm_medium=${medium}&utm_campaign=${UTM_CAMPAIGN}`;
}

/** Map the Chinese media-type slugs from the API to localized display labels. */
export function mediaTypeLabel(slug: string | undefined | null, locale: Locale): string {
  if (!slug) return tMediaFallback(locale);
  const key = slug === "视频" || slug === "video" ? "video" : slug === "图片" || slug === "image" ? "image" : null;
  if (key === "video") return mediaLabels[locale].video;
  if (key === "image") return mediaLabels[locale].image;
  return slug;
}

function tMediaFallback(locale: Locale): string {
  return mediaLabels[locale].media;
}

const mediaLabels: Record<Locale, { video: string; image: string; media: string }> = {
  en: { video: "Video", image: "Image", media: "Media" },
  es: { video: "Vídeo", image: "Imagen", media: "Medio" },
  pt: { video: "Vídeo", image: "Imagem", media: "Mídia" },
  ja: { video: "動画", image: "画像", media: "メディア" },
  ko: { video: "비디오", image: "이미지", media: "미디어" },
  de: { video: "Video", image: "Bild", media: "Medien" },
  fr: { video: "Vidéo", image: "Image", media: "Média" },
  tr: { video: "Video", image: "Görsel", media: "Medya" },
  "zh-TW": { video: "影片", image: "圖片", media: "媒體" },
  "zh-CN": { video: "视频", image: "图片", media: "媒体" },
  ru: { video: "Видео", image: "Изображение", media: "Медиа" },
};
