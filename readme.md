# Gulp based static site generator example

## Using following Gulp plugins

- gulp-front-matter: parse front matter (yaml config) of posts
- gulp-markdown: render md to html
- gulp-rename: slugify & rename files to .html
- gulp-render-nunjucks: render posts using templates
- gulp-funnel: collect all posts in a list for rendering the index of all posts

## Generate index of posts

´´´
  npm run-script index
´´´

## Render posts

´´´
  npm run-script posts
´´´
