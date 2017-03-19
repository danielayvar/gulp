
const gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');
  cleanCSS = require('gulp-clean-css');
  htmlmin = require('gulp-htmlmin');
  image = require('gulp-image');



gulp.task('minify:JS', function () {
/* Minify JS */
  gulp.src('js/*.js')
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build/js/'))
});

gulp.task('minify:CSS', function () {
/* Minify CSS */
  return gulp.src('css/*.css')
    .pipe(concat('main.min.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/css/'));
});


 
gulp.task('minify:HTML', function() {
  return gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'));
});

gulp.task('minify:PHP', function() {
  return gulp.src('./*.php')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'));
});


 
gulp.task('compress:image', function () {
  gulp.src('./img/*')
    .pipe(image())
    .pipe(gulp.dest('./build/img'));
});
 
/*gulp.task('default', ['image']);*/