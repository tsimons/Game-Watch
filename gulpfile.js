var gulp = require('gulp')
  , sourcemaps = require('gulp-sourcemaps')
  , babel = require('gulp-babel')
  , browserify = require('gulp-browserify')
  , uglify = require('gulp-uglify')
  , less = require('gulp-less')
  , livereload = require('gulp-livereload')
  , notify = require('gulp-notify')
  , plumber = require('gulp-plumber')
  , path = require('path')
;

gulp.task('css', function () {
  return gulp.src('client/less/app.less')
    .pipe(plumber({errorHandler: notify.onError({
      title: 'ERROR',
      message: '<%= error.message %>',
      icon: 'assets/less.png'
    })}))
    .pipe(less({
      paths: ['./node_modules/bootstrap/less'],
      compress: true
    }))
    .pipe(gulp.dest('client/build/css'))
    .pipe(notify({
      title: 'SUCCESS',
      icon: 'assets/less.png'
    }))
    .pipe(livereload())
  ;
});

gulp.task('dumbify', function () {
  return gulp.src('client/js/**/*.js')
    .pipe(plumber({errorHandler: notify.onError({
      title: 'ERROR',
      message: '<%= error.message %>',
      icon: 'assets/js.png'
    })}))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('client/.tmp/js/'))
  ;
});

gulp.task('js', ['dumbify'], function () {
  return gulp.src('client/.tmp/js/index.js')
    .pipe(plumber({errorHandler: notify.onError({
      title: 'ERROR',
      message: '<%= error.message %>',
      icon: 'assets/js.png'
    })}))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(browserify())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('client/build/js'))
    .pipe(notify({
      title: 'SUCCESS',
      icon: 'assets/js.png'
    }))
    .pipe(livereload())
  ;
});

gulp.task('watch', function () {
  livereload.listen();
  console.log('Now listening for changes...');
  gulp.watch(['client/js/**/*.js', '!client/.tmp/**/*'], ['js']);
  gulp.watch(['client/less/**/*.less'], ['css']);
})


gulp.task('default', ['watch', 'js', 'css'], function () {
});