/**
 * Client for the gptproto materials API.
 * Types mirror MaterialApiItem from gptproto-growth/docs/api/materials.md.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  DEFAULT_README_LOCALE,
  MATERIALS_API_BASE,
  MODEL_SLUG,
  OFFLINE,
  SUPPORTED_LOCALES,
  type Locale,
} from "./config.js";

// ---------------------------------------------------------------------------
// Types (mirror the API contract — source + translation layers)
// ---------------------------------------------------------------------------

export interface PromptSingle {
  type: "single";
  /** Source layer — executable original, never localized. */
  text: string;
  /** Translation layer — human-readable localized prompt text. */
  readable: string | null;
}

export interface PromptDual {
  type: "dual";
  image?: string;
  video?: string;
  image_readable: string | null;
  video_readable: string | null;
}

export type MaterialPrompt = PromptSingle | PromptDual;

export interface ReferenceImage {
  id: string;
  url: string;
  source: "upload" | "tweet_media";
}

export interface TweetMedia {
  type: "photo" | "video";
  url: string;
  poster?: string;
}

export interface Tweet {
  tweet_id: string;
  url: string;
  posted_at: string;
  is_content_edited?: boolean;
  author_name: string;
  author_username: string;
  author_avatar?: string;
  author_followers?: number;
  author_verified?: boolean;
  media: TweetMedia[];
  reply_count?: number;
  like_count?: number;
  bookmark_count?: number;
  retweet_count?: number;
  view_count?: number;
}

export interface MaterialItem {
  id: string;
  status: string;
  locale: string;
  is_fallback: boolean;
  source_locale: string | null;
  title: string | null;
  prompt: MaterialPrompt;
  negative_prompt: string | null;
  notes: string | null;
  model_slug: string;
  media_type_slug: string;
  reference_images: ReferenceImage[];
  tweet: Tweet | null;
}

interface MaterialsResponse {
  items: MaterialItem[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    hasMore: boolean;
  };
}

// ---------------------------------------------------------------------------
// Snapshot persistence
// ---------------------------------------------------------------------------

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SNAPSHOT_PATH = path.resolve(__dirname, "../../data/snapshot.json");
export const LAST_RUN_PATH = path.resolve(__dirname, "../../data/last-run.json");

/** Delta vs previous snapshot (material id = one library entry; tweet = linked X post). */
export interface MaterialDiff {
  previousTotal: number;
  currentTotal: number;
  added: number;
  removed: number;
  /** New materials with an associated tweet. */
  addedWithTweet: number;
  addedIds: string[];
  /** New entries that have tweet metadata (for logging / commit notes). */
  addedTweets: Array<{
    material_id: string;
    tweet_id: string;
    url: string;
    author_username: string;
  }>;
}

interface LocaleSlice {
  total: number;
  items: MaterialItem[];
}

/** Committed to git — never store MATERIALS_API_BASE (may be a private host). */
const SNAPSHOT_SOURCE_LABEL = "materials-api";

interface Snapshot {
  /** Opaque label only; real API base stays in .env / GitHub Secrets. */
  generatedFrom: string;
  model: string;
  /** Total prompts in the gptproto library (from API pagination.total). */
  libraryTotal?: number;
  /** Source layer only — same prompt.text across all langs; used for PROMPTS_ORIGINAL. */
  source: LocaleSlice;
  byLocale: Partial<Record<Locale, LocaleSlice>>;
}

function writeSnapshot(
  source: MaterialItem[],
  byLocale: Record<Locale, MaterialItem[]>,
  libraryTotal: number,
): void {
  const snapshot: Snapshot = {
    generatedFrom: SNAPSHOT_SOURCE_LABEL,
    model: MODEL_SLUG,
    libraryTotal,
    source: { total: source.length, items: source },
    byLocale: Object.fromEntries(
      SUPPORTED_LOCALES.map((locale) => [
        locale,
        { total: byLocale[locale].length, items: byLocale[locale] },
      ]),
    ) as Snapshot["byLocale"],
  };
  fs.mkdirSync(path.dirname(SNAPSHOT_PATH), { recursive: true });
  fs.writeFileSync(SNAPSHOT_PATH, JSON.stringify(snapshot, null, 2), "utf-8");
}

function readSnapshot(): Snapshot {
  if (!fs.existsSync(SNAPSHOT_PATH)) {
    throw new Error(
      `No snapshot found at ${SNAPSHOT_PATH}. Run once against a live API before using OFFLINE mode.`,
    );
  }
  const raw = JSON.parse(fs.readFileSync(SNAPSHOT_PATH, "utf-8")) as Snapshot & {
    items?: MaterialItem[];
  };
  // Migrate legacy snapshot (flat `items` only).
  if (raw.items && !raw.source) {
    return {
      generatedFrom: SNAPSHOT_SOURCE_LABEL,
      model: raw.model ?? MODEL_SLUG,
      source: { total: raw.items.length, items: raw.items },
      byLocale: { [DEFAULT_README_LOCALE]: { total: raw.items.length, items: raw.items } },
    };
  }
  return raw;
}

function previousSourceItems(): MaterialItem[] | null {
  if (!fs.existsSync(SNAPSHOT_PATH)) return null;
  try {
    const snap = readSnapshot();
    const items = snap.source?.items;
    return items?.length ? normalizeItems(items) : null;
  } catch {
    return null;
  }
}

/** Compare current fetch to on-disk snapshot before it is overwritten. */
export function computeMaterialDiff(
  previous: MaterialItem[] | null,
  current: MaterialItem[],
): MaterialDiff {
  const prevIds = new Set((previous ?? []).map((m) => m.id));
  const curIds = new Set(current.map((m) => m.id));
  const addedItems = current.filter((m) => !prevIds.has(m.id));
  const removed = [...prevIds].filter((id) => !curIds.has(id)).length;
  const addedTweets = addedItems
    .filter((m): m is MaterialItem & { tweet: Tweet } => m.tweet != null)
    .map((m) => ({
      material_id: m.id,
      tweet_id: m.tweet.tweet_id,
      url: m.tweet.url,
      author_username: m.tweet.author_username,
    }));

  return {
    previousTotal: previous?.length ?? 0,
    currentTotal: current.length,
    added: addedItems.length,
    removed,
    addedWithTweet: addedTweets.length,
    addedIds: addedItems.map((m) => m.id),
    addedTweets,
  };
}

export function writeLastRun(diff: MaterialDiff, at = new Date().toISOString()): void {
  fs.mkdirSync(path.dirname(LAST_RUN_PATH), { recursive: true });
  fs.writeFileSync(
    LAST_RUN_PATH,
    JSON.stringify({ at, model: MODEL_SLUG, ...diff }, null, 2),
    "utf-8",
  );
}

// ---------------------------------------------------------------------------
// Fetching
// ---------------------------------------------------------------------------

async function fetchPage(locale: Locale | null, page: number, pageSize: number): Promise<MaterialsResponse> {
  const params = new URLSearchParams({
    model: MODEL_SLUG,
    sort: "hot",
    pageSize: String(pageSize),
    page: String(page),
  });
  if (locale) params.set("lang", locale);
  const url = `${MATERIALS_API_BASE}/api/materials?${params}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API responded ${res.status} for ${url}`);
  return (await res.json()) as MaterialsResponse;
}

async function fetchAllPages(locale: Locale | null): Promise<{ items: MaterialItem[]; total: number }> {
  const pageSize = 100;
  const all: MaterialItem[] = [];
  let total = 0;
  let page = 1;
  while (true) {
    const data = await fetchPage(locale, page, pageSize);
    if (page === 1) total = data.pagination.total;
    all.push(...normalizeItems(data.items));
    if (!data.pagination.hasMore) break;
    page += 1;
  }
  return { items: all, total: total || all.length };
}

/** Ensure prompt readable fields exist for older API responses. */
function normalizeItems(items: MaterialItem[]): MaterialItem[] {
  return items.map((item) => {
    const p = item.prompt;
    if (p.type === "single") {
      return {
        ...item,
        prompt: {
          type: "single",
          text: p.text ?? "",
          readable: p.readable ?? null,
        },
      };
    }
    return {
      ...item,
      prompt: {
        type: "dual",
        image: p.image,
        video: p.video,
        image_readable: p.image_readable ?? null,
        video_readable: p.video_readable ?? null,
      },
    };
  });
}

/**
 * Fetch materials for one locale (translation layer for that lang).
 */
export async function fetchMaterialsForLocale(locale: Locale): Promise<MaterialItem[]> {
  const { items } = await fetchAllPages(locale);
  return items;
}

/**
 * Source-layer archive: `prompt.text` is identical for any lang — we use `lang=en`
 * for README.md's sibling fetch and for snapshot.source.
 */
export async function fetchSourceMaterials(): Promise<MaterialItem[]> {
  return fetchMaterialsForLocale(DEFAULT_README_LOCALE);
}

export interface FetchAllResult {
  source: MaterialItem[];
  byLocale: Record<Locale, MaterialItem[]>;
  /** Total prompts in the gptproto library (pagination.total). */
  libraryTotal: number;
  /** vs snapshot.json before this run; null in OFFLINE or API fallback. */
  diff: MaterialDiff | null;
}

/**
 * Fetch every locale + write snapshot. Falls back to snapshot on network failure.
 */
export async function fetchAllForGeneration(): Promise<FetchAllResult> {
  if (OFFLINE) {
    console.log("  📦 OFFLINE mode — reading data/snapshot.json");
    const snap = readSnapshot();
    const byLocale = {} as Record<Locale, MaterialItem[]>;
    for (const locale of SUPPORTED_LOCALES) {
      const slice = snap.byLocale?.[locale];
      if (!slice?.items?.length) {
        throw new Error(
          `Snapshot missing byLocale.${locale}. Re-run online generation against the API.`,
        );
      }
      byLocale[locale] = normalizeItems(slice.items);
    }
    const source = snap.source?.items?.length
      ? normalizeItems(snap.source.items)
      : byLocale[DEFAULT_README_LOCALE];
    const libraryTotal = snap.libraryTotal ?? snap.source?.total ?? source.length;
    return { source, byLocale, libraryTotal, diff: null };
  }

  const byLocale = {} as Record<Locale, MaterialItem[]>;
  const before = previousSourceItems();
  let libraryTotal = 0;

  try {
    for (const locale of SUPPORTED_LOCALES) {
      console.log(`  📥 Fetching lang=${locale}…`);
      const { items, total } = await fetchAllPages(locale);
      byLocale[locale] = items;
      if (locale === DEFAULT_README_LOCALE) libraryTotal = total;
    }
    const source = byLocale[DEFAULT_README_LOCALE];
    const diff = computeMaterialDiff(before, source);
    writeSnapshot(source, byLocale, libraryTotal);
    return { source, byLocale, libraryTotal, diff };
  } catch (err) {
    console.warn(
      `  ⚠️  Live fetch failed (${(err as Error).message}). Falling back to snapshot.`,
    );
    const snap = readSnapshot();
    const byLocale = {} as Record<Locale, MaterialItem[]>;
    for (const locale of SUPPORTED_LOCALES) {
      const slice = snap.byLocale?.[locale];
      if (!slice?.items?.length) {
        throw new Error(`Snapshot missing byLocale.${locale}`);
      }
      byLocale[locale] = normalizeItems(slice.items);
    }
    const source = snap.source?.items?.length
      ? normalizeItems(snap.source.items)
      : byLocale[DEFAULT_README_LOCALE];
    const libraryTotal = snap.libraryTotal ?? snap.source?.total ?? source.length;
    return { source, byLocale, libraryTotal, diff: null };
  }
}

/** @deprecated Use fetchAllForGeneration — kept for minimal breakage. */
export async function fetchAllMaterials(): Promise<MaterialItem[]> {
  const { byLocale } = await fetchAllForGeneration();
  return byLocale[DEFAULT_README_LOCALE];
}

export function countFallback(items: MaterialItem[]): number {
  return items.filter((i) => i.is_fallback).length;
}
