#!/usr/bin/env bash
set -euo pipefail

if [ "$(git branch --show-current)" != "redesign" ]; then
  echo "错误：请在 redesign 分支上运行 npm run deploy:redesign"
  exit 1
fi

echo "==> 构建重设计版本"
npm run build

echo "==> 推送到 gh-pages-redesign（不会修改 gh-pages）"
cd dist
rm -rf .git
git init -q
git config user.email "qukoyk@users.noreply.github.com"
git config user.name "Qukoyk"
git add -A
git commit -q -m "Deploy redesign to gh-pages-redesign"
git branch -M gh-pages-redesign
git remote add origin git@github.com:Qukoyk/miaomiao.git
git push origin gh-pages-redesign --force

echo "完成。请在 GitHub Settings → Pages 把 Branch 切到 gh-pages-redesign / root。"
echo "回滚：把 Branch 切回 gh-pages。"
