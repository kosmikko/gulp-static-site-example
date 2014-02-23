var gulp = require('gulp');
var frontMatter = require('gulp-front-matter');
var markdown = require('gulp-markdown');
var nunjucks = require('gulp-render-nunjucks');
var funnel = require('gulp-funnel');
var rename = require('gulp-rename');
var slug = require('slug');

var fmOpts = {
  property: 'meta',
  remove: true
};

gulp.task('posts', function() {
  gulp.src('./posts/*.md')
    .pipe(frontMatter(fmOpts))
    .pipe(markdown())
    .pipe(nunjucks())
    .pipe(gulp.dest('dist'));
});

gulp.task('index', function() {
  gulp.src('./posts/*.md')
    .pipe(frontMatter(fmOpts))
    .pipe(rename(function(path) {
      path.basename = slug(path.basename);
      path.extname = '.html'
    }))
    .pipe(funnel())
    .pipe(nunjucks({defaultTemplate: 'index'}))
    .pipe(gulp.dest('dist'));
});