#!/usr/bin/env bash
rm -rf build
npm run build
cd build
git init
git remote add origin ssh://git@github.com/osff/osff.github.io.git
git add .
git commit -m "init"
git push -u --force origin master
