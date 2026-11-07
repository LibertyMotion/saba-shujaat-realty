#!/usr/bin/env bash
# Builds a PREVIEW of the site (banner, hidden from search engines, forms not
# connected) and publishes it to the gh-pages branch for GitHub Pages:
#   https://<owner>.github.io/saba-shujaat-realty/
# Usage: npm run deploy:preview
set -euo pipefail
cd "$(dirname "$0")/.."

REMOTE_URL="$(git remote get-url origin)"
OWNER="$(echo "$REMOTE_URL" | sed -E 's#.*github\.com[:/]([^/]+)/.*#\1#' | tr '[:upper:]' '[:lower:]')"
REPO="$(basename -s .git "$REMOTE_URL")"

BASE_PATH="/$REPO/" SITE_URL="https://$OWNER.github.io" PUBLIC_PREVIEW=true npm run build
touch dist/.nojekyll   # GitHub Pages must not run Jekyll, or /_astro/ assets are hidden

TMP="$(mktemp -d)"
cp -R dist/. "$TMP/"
git -C "$TMP" init -q -b gh-pages
git -C "$TMP" add -A
git -C "$TMP" -c user.name="$(git config user.name || echo preview)" -c user.email="$(git config user.email || echo preview@localhost)" \
  commit -q -m "Preview build $(date -u +%Y-%m-%dT%H:%MZ)"
git -C "$TMP" push -q -f "$REMOTE_URL" gh-pages
rm -rf "$TMP"
echo "Published preview → https://$OWNER.github.io/$REPO/"
