var gulp = require('gulp')
var stylus = require('gulp-stylus')
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
  gulp.src('./stylus/*')
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./css'))
});
