#!/usr/bin/env bash
set -euo pipefail

cd "$(cd "$(dirname "$0")" && pwd)/.."

BASE_PATH=/math100 pnpm exec astro build

origin="$(git remote get-url origin)"
tmpdir="$(mktemp -d)"
trap 'rm -rf "$tmpdir"' EXIT

cp -a dist/. "$tmpdir/"

git -C "$tmpdir" init -b gh-pages
git -C "$tmpdir" add -A

name="$(git config user.name)"
email="$(git config user.email)"
git -C "$tmpdir" -c "user.name=${name}" -c "user.email=${email}" commit -m "Deploy to GitHub Pages"

git -C "$tmpdir" push --force "$origin" HEAD:gh-pages
