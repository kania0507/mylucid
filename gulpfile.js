var gulp = require('gulp');
const browserSync     = require('browser-sync').create();
/*
gulp.task('greet', function () {
   console.log('Hello world!');
});
*/

var gulp = require('gulp'),
   uglify = require('gulp-uglify');

gulp.task('minify', function () {
   gulp.src('js/app.js')
      .pipe(uglify())
      .pipe(gulp.dest('build'))
});

gulp.task('server', ()=>{
  browserSync.init({
    server: {
        baseDir: "src"
    },
    browser: ['chrome']
  });
}); 