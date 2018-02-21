var gulp = require('gulp')
var sass = require('gulp-sass')
var babel = require('babelify')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var rename = require('gulp-rename')
// var presents = require('babel-preset-env')
var sourcemaps = require('gulp-sourcemaps')
var buffer = require('vinyl-buffer')
var watchify = require('watchify')




gulp.task('styles', function () {
    gulp
    .src('app.scss')
    .pipe(sass())
    .pipe(gulp.dest('public'))
})

gulp.task('assets', function (){
    gulp
    .src('assets/*')
    .pipe(gulp.dest('public'))
})

function compile(watch) {
    var bundler = watchify(browserify('./src/index.js', { debug: true }).transform(babel));
  
    function rebundle() {
      bundler.bundle()
        .on('error', function(err) { console.error(err); this.emit('end'); })
        .pipe(source('index.js'))
        .pipe(rename('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('public'));
    }
  
    if (watch) {
      bundler.on('update', function() {
        console.log('-> bundling...');
        rebundle();
      });
    }
  
    rebundle();
  }
  
  function watch() {
    return compile(true);
  };
  
  gulp.task('build', function() { return compile(); });
  gulp.task('watch', function() { return watch(); });


gulp.task('default', ['styles', 'assets', 'build'])
