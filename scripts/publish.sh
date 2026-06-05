#!/usr/bin/env bash
# Local cron alternative to GitHub Actions: generate → commit → push.
# Usage (from repo root or this directory):
#   ./scripts/publish.sh
#   MATERIALS_API_BASE=https://your-api.example ./scripts/publish.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ -f ../.env ]]; then
  set -a
  # shellcheck disable=SC1091
  source ../.env
  set +a
fi
if [[ -f .env ]]; then
  set -a
  # shellcheck disable=SC1091
  source .env
  set +a
fi

echo "→ pnpm generate (API: ${MATERIALS_API_BASE:-http://localhost:3000})"
pnpm generate

# Monorepo: git root may be parent of awesome-seedance-2-0-prompts
GIT_ROOT="$(git -C "$ROOT" rev-parse --show-toplevel 2>/dev/null || git -C "$ROOT/.." rev-parse --show-toplevel)"
PREFIX=""
if [[ "$GIT_ROOT" != "$ROOT" ]]; then
  PREFIX="${ROOT#"$GIT_ROOT"/}/"
fi

git -C "$GIT_ROOT" add \
  "${PREFIX}README.md" \
  "${PREFIX}README_"*.md \
  "${PREFIX}docs/PROMPTS_ORIGINAL.md" \
  "${PREFIX}data/snapshot.json"

if git -C "$GIT_ROOT" diff --quiet && git -C "$GIT_ROOT" diff --staged --quiet; then
  echo "No changes — nothing to commit."
  exit 0
fi

MSG="docs: auto-update README [skip ci]"
LAST_RUN="$ROOT/data/last-run.json"
if [[ -f "$LAST_RUN" ]]; then
  ADDED=$(node -e "const d=require(process.argv[1]);process.stdout.write(String(d.added??0))" "$LAST_RUN")
  REMOVED=$(node -e "const d=require(process.argv[1]);process.stdout.write(String(d.removed??0))" "$LAST_RUN")
  TWEETS=$(node -e "const d=require(process.argv[1]);process.stdout.write(String(d.addedWithTweet??0))" "$LAST_RUN")
  if [[ "$ADDED" != "0" || "$REMOVED" != "0" ]]; then
    MSG="docs: auto-update README (+${ADDED}/-${REMOVED}, ${TWEETS} tweets) [skip ci]"
  fi
fi
git -C "$GIT_ROOT" commit -m "$MSG"
git -C "$GIT_ROOT" push
echo "Published."
