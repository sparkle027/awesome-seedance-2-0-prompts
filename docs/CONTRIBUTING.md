# Contributing

Thanks for helping grow **Awesome Seedance 2.0 Prompts**! This list collects real, high-quality Seedance 2.0 video prompts with their outputs and original sources.

## Submit a prompt

The easiest way is the issue form:

1. Open a [**new prompt submission**](https://github.com/sparkle027/awesome-seedance-2-0-prompts/issues/new?template=submit-prompt.yml).
2. Provide:
   - The full **prompt** text (exactly as used).
   - A link to the **output** video or image.
   - The **original source** (the X/Twitter post, if any).
   - The author's name/handle so we can credit them.
3. We review and add accepted prompts on the next regeneration.

## Quality bar

- ✅ Real Seedance 2.0 outputs (not other models).
- ✅ Reusable, well-written prompts — no duplicates.
- ✅ Credit the original creator and link the source.
- ❌ No NSFW, hateful, or infringing content.

## How the README is generated

The `README.md` is **auto-generated** — do not edit it by hand. It is built by:

```bash
pnpm install
cp .env.example .env   # then set MATERIALS_API_BASE / SITE_URL
pnpm generate          # fetch the materials API + rewrite README.md
pnpm generate:offline  # rebuild from data/snapshot.json (no API needed)
```

Generator code lives in [`scripts/`](../scripts). To re-theme the repo for another model, edit [`scripts/utils/config.ts`](../scripts/utils/config.ts).

## Automated updates (CI)

Same pattern as [YouMind OpenLab](https://github.com/YouMind-OpenLab/awesome-nano-banana-pro-prompts): scheduled fetch → regenerate → commit → push.

| Step | What happens |
|------|----------------|
| **Trigger** | Every 4 hours (`cron`), manual `workflow_dispatch`, or push to `main` when `scripts/**` changes |
| **Fetch** | `pnpm generate` calls `GET /api/materials?model=seedance-2-0&lang=…` for all 11 locales |
| **Write** | `README.md`, `README_*.md`, `docs/PROMPTS_ORIGINAL.md`, `data/snapshot.json` |
| **Commit** | `docs: auto-update README [skip ci]` (bot user, skip if no diff) |
| **Publish** | `git push` to `main` — the public README *is* the release |

**Setup on GitHub**

1. Repo → **Settings → Secrets and variables → Actions** → New secret: `MATERIALS_API_BASE` = your live API (e.g. `https://gptproto.com` or internal host).
2. Ensure **Workflow permissions → Read and write** (for `GITHUB_TOKEN` push).
3. Workflow file: [`.github/workflows/update-readme.yml`](../.github/workflows/update-readme.yml).

**Local / server cron** (optional):

```bash
cd awesome-seedance-2-0-prompts
chmod +x scripts/publish.sh
pnpm publish
```

**Publishing:** Push this folder as the **repository root** on `sparkle027/awesome-seedance-2-0-prompts` (e.g. `git subtree push --prefix=awesome-seedance-2-0-prompts origin main` from the parent workspace).

## Attribution

All prompts are credited to their original authors with a link to the source post. If you're an author and want a change or removal, open an issue.
