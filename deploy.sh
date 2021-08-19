#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:ParinazSetayeshgar/Vue3-Iran-Weather-Report.git main:gh-pages

cd -