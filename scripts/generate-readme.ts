/**
 * Entry point: fetch materials for all locales, write README*.md + PROMPTS_ORIGINAL.md.
 *
 *   pnpm generate            # live API (default http://localhost:3000)
 *   pnpm generate:offline    # data/snapshot.json only
 *
 * README.md uses ?lang=en (translation layer). Executable originals: docs/PROMPTS_ORIGINAL.md.
 */
import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  countFallback,
  fetchAllForGeneration,
  writeLastRun,
  type MaterialDiff,
} from "./utils/api-client.js";
import { generateOriginalPrompts, generateReadme } from "./utils/markdown.js";
import { orderItemsForDisplay } from "./utils/sort.js";
import {
  DEFAULT_README_LOCALE,
  MATERIALS_API_BASE,
  MODEL_NAME,
  OFFLINE,
  PROMPTS_ORIGINAL_FILE,
  SUPPORTED_LOCALES,
  readmePathForLocale,
} from "./utils/config.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

async function main() {
  console.log(`\n🎬 Generating "Awesome ${MODEL_NAME} Prompts" (11 locales + originals)`);
  console.log(
    `   Source: ${OFFLINE ? "data/snapshot.json (offline)" : "materials API (MATERIALS_API_BASE)"}`,
  );
  console.log(`   README.md locale: ${DEFAULT_README_LOCALE}`);

  const { source, byLocale, libraryTotal, diff } = await fetchAllForGeneration();

  if (diff) {
    writeLastRun(diff);
    logMaterialDiff(diff);
  }

  if (source.length === 0) {
    console.error("   ❌ No materials returned — aborting.");
    process.exit(1);
  }

  fs.mkdirSync(path.join(ROOT, "docs"), { recursive: true });

  const originalPath = path.join(ROOT, PROMPTS_ORIGINAL_FILE);
  const originalMd = generateOriginalPrompts(orderItemsForDisplay(source));
  fs.writeFileSync(originalPath, originalMd, "utf-8");
  console.log(`   📝 Wrote ${PROMPTS_ORIGINAL_FILE} (${source.length} source-layer prompts)`);

  for (const locale of SUPPORTED_LOCALES) {
    const items = byLocale[locale];
    if (!items?.length) {
      console.error(`   ❌ No items for lang=${locale}`);
      process.exit(1);
    }
    const md = generateReadme(items, locale, libraryTotal);
    const out = readmePathForLocale(locale, ROOT);
    fs.writeFileSync(out, md, "utf-8");
    const fallbacks = countFallback(items);
    const file = locale === DEFAULT_README_LOCALE ? "README.md" : path.basename(out);
    console.log(
      `   📝 ${file}: ${items.length} prompts, ${fallbacks} fallback, ${(md.match(/gptproto\.com/g) || []).length} links`,
    );
  }

  console.log("   ✨ Done.\n");
}

function logMaterialDiff(diff: MaterialDiff): void {
  if (diff.previousTotal === 0) {
    console.log(`   📊 First snapshot baseline: ${diff.currentTotal} materials`);
    return;
  }
  console.log(
    `   📊 Delta vs last run: +${diff.added} new, -${diff.removed} removed (${diff.previousTotal} → ${diff.currentTotal})`,
  );
  if (diff.addedWithTweet > 0) {
    console.log(`   🐦 New with X/Twitter post: ${diff.addedWithTweet}`);
    for (const t of diff.addedTweets.slice(0, 5)) {
      console.log(`      @${t.author_username} ${t.url}`);
    }
    if (diff.addedTweets.length > 5) {
      console.log(`      … and ${diff.addedTweets.length - 5} more (see data/last-run.json)`);
    }
  } else if (diff.added > 0) {
    console.log(`   📎 ${diff.added} new material(s) without tweet link in API`);
  }
}

main().catch((err) => {
  console.error("❌ Generation failed:", err);
  process.exit(1);
});
