#!/bin/bash
if [ ! -d "./out" ]; then
    mkdir ./out
fi

# custom domain
echo 'pnwcubedrafters.com' > ./out/CNAME

# allow gh pages to scan directories that start with _ (aka _next/)
echo 'true' > ./out/.nojekyll

gh-pages --src out -b main -r https://github.com/tyrelh/tyrelh.github.io.git -f
