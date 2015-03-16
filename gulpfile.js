var gulp = require('gulp')
  , browserify = require('gulp-browserify')
  , uglify = require('gulp-uglify')
  , rename = require('gulp-rename')
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
})

gulp.task('js', function () {
  return gulp.src('client/js/index.js')
    .pipe(plumber({errorHandler: notify.onError({
      title: 'ERROR',
      message: '<%= error.message %>',
      icon: 'assets/js.png'
    })}))
    .pipe(browserify())
    // .pipe(uglify())
    .pipe(rename('app.js'))
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
  gulp.watch(['client/js/**/*.js'], ['js']);
  gulp.watch(['client/less/**/*.less'], ['css']);
})


gulp.task('default', ['watch', 'js', 'css'], function () {
});