var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
	  uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
	  imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    //cache = require('gulp-cache'),    
    del = require('del');

gulp.task('scripts', function() {
  return gulp.src('assets/js/**/*js')
    //.pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    //.pipe(concat('app.js'))
    .pipe(gulp.dest('public/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/assets/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('styles', function(){
  return gulp.src('assets/css/**/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/assets/css'))
    .pipe(notify({message: "Styles task complete"}));
});

gulp.task('images', function() {
  return gulp.src('assets/img/*')
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
    .pipe(gulp.dest('public/assets/img'))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('clean', function(cb) {
    del(['public/assets/js', 'public/assets/img', 'public/assets/css'], cb)
});

gulp.task('default', ['clean'], function() {
    gulp.start('scripts', 'images', 'styles');
});

gulp.task('watch', function() {

  // Watch .js files
  gulp.watch('assets/js/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('assets/img/*', ['images']);

});
