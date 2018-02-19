var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {
    gulp
    .src('app.scss')
    .pipe(sass())
    .pipe(gulp.dest('public'))
})

gulp.task('default', ['styles'])
