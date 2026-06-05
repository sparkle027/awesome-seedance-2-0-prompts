/** Small formatting helpers shared by the markdown renderers. */

/** 68808 -> "68.8K", 14829594 -> "14.8M", 942 -> "942". */
export function compact(n: number | undefined | null): string {
  if (!n || n < 0) return "0";
  if (n < 1000) return String(n);
  if (n < 1_000_000) return trim(n / 1000) + "K";
  if (n < 1_000_000_000) return trim(n / 1_000_000) + "M";
  return trim(n / 1_000_000_000) + "B";
}

function trim(v: number): string {
  // One decimal, but drop a trailing ".0" (e.g. 2.0K -> 2K).
  return v.toFixed(1).replace(/\.0$/, "");
}

/** ISO date -> "Feb 14, 2026". Returns "" on bad input. */
export function formatDate(iso: string | undefined | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** Strip stray ``` code-fence markers so prompt text sits cleanly inside our own fence. */
export function cleanPrompt(text: string | undefined | null): string {
  if (!text) return "";
  return text
    .replace(/^```[\w-]*\s*\n?/im, "")
    .replace(/\n?```\s*$/im, "")
    .replace(/\n```[\w-]*\s*\n/g, "\n")
    .trim();
}

/** Collapse whitespace and clip to `max` chars for use in titles/alt text. */
export function oneLine(text: string, max = 90): string {
  const flat = text.replace(/\s+/g, " ").trim();
  return flat.length > max ? flat.slice(0, max - 1).trimEnd() + "…" : flat;
}
