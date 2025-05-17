#!/bin/bash
if [ ! -d "$DIRECTORY" ]; then
    mkdir ./out
fi

# custom domain
echo 'pnwcubedrafters.com' > ./out/CNAME

# allow gh pages to scan directories that start with _ (aka _next/)
echo 'true' > ./out/.nojekyll

gh-pages -d out -b main -r https://github.com/tyrelh/tyrelh.github.io.git -f -t
