var gulp = require('gulp')
var stylus = require('gulp-stylus')

gulp.task('default', function() {
  console.log("it's working.")
})

gulp.task('stylus', function() {
  gulp.src('./stylus/*')
    .pipe(stylus())
    .pipe(gulp.dest('./css'))
});
