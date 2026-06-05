import { FEATURED_COUNT } from "./config.js";
import type { MaterialItem } from "./api-client.js";

/** Parse tweet posted_at (or 0 when missing) for stable date sorting. */
export function materialPostedAt(m: MaterialItem): number {
  const iso = m.tweet?.posted_at;
  if (!iso) return 0;
  const t = new Date(iso).getTime();
  return Number.isNaN(t) ? 0 : t;
}

/** Newest first; ties keep input order. */
export function sortByDateDesc(items: MaterialItem[]): MaterialItem[] {
  return [...items].sort((a, b) => materialPostedAt(b) - materialPostedAt(a));
}

/**
 * Top FEATURED_COUNT stay in hot/engagement order (API `sort=hot`).
 * Everything else is sorted by posted date, newest first.
 */
export function partitionFeaturedAndRest(items: MaterialItem[]): {
  featured: MaterialItem[];
  rest: MaterialItem[];
} {
  const featured = items.slice(0, FEATURED_COUNT);
  return { featured, rest: sortByDateDesc(items.slice(FEATURED_COUNT)) };
}

/** Flat list for PROMPTS_ORIGINAL.md — featured block then date-sorted rest. */
export function orderItemsForDisplay(items: MaterialItem[]): MaterialItem[] {
  const { featured, rest } = partitionFeaturedAndRest(items);
  return [...featured, ...rest];
}
