var gulp = require('gulp')
var stylus = require('gulp-stylus')
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
  var watcher = gulp.watch('./stylus/*', ['styles'])

  watcher.on('change', function(event) {
    console.log(`File ${event.path} was ${event.type}, running tasks...`)
  })
})

gulp.task('styles', function() {
  gulp.src('./stylus/*')
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./css'))
});
