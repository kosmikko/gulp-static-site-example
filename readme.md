# Gulp based static site generator example

## Using following Gulp plugins

- [gulp-front-matter](https://github.com/lmtm/gulp-front-matter): parse front matter (yaml config) of posts
- [gulp-markdown](https://github.com/sindresorhus/gulp-markdown): render md to html
- [gulp-rename](https://github.com/hparra/gulp-rename): slugify & rename files to .html
- [gulp-render-nunjucks](https://github.com/pichfl/gulp-render-nunjucks): render posts using templates
- [gulp-funnel](https://github.com/mikkolehtinen/gulp-funnel): collect all posts in a list for rendering the index of all posts

## Generate index of posts

	npm run-script index


## Render posts


	npm run-script posts

