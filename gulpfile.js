const gulp = require('gulp')
const stylus = require('gulp-stylus')
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()

gulp.task('serve', ['styles'], function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })

  gulp.watch('./stylus/*', ['styles']).on('change', function(event) {
    console.log(`File ${event.path} was ${event.type}, running tasks...`)
  })
  gulp.watch('./index.html').on('change', browserSync.reload)
})

gulp.task('styles', function() {
  gulp.src('./stylus/*')
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
});
