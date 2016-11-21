var gulp = require('gulp');
var concat = require('gulp-concat');


gulp.task('js', function() {
  libraryPaths = [
    'demo/redactor/redactor.js',
    'demo/redactor/filepicker.js',
    'demo/redactor/fullscreen.js',
    'demo/redactor/alignment.js',
    'demo/redactor/inlinestyle.js',
    'demo/redactor/source.js',
    'demo/redactor/fullscreen.js',
    'demo/redactor/textdirection.js',
    'angular-redactor-2.js'
  ]
  stream = gulp.src(libraryPaths)
    .pipe(concat("angular-redactor-filepicker.js"))
    .pipe(gulp.dest("dist"));
  return stream
});

gulp.task('css', function() {
  libraryPaths = [
    'demo/redactor/redactor.css',
    'demo/redactor/alignment.css'
  ]
  stream = gulp.src(libraryPaths)
    .pipe(concat("angular-redactor-filepicker.css"))
    .pipe(gulp.dest("dist"));
  return stream
});

gulp.task('default', ['css', 'js'])
