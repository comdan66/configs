var gulp       = require ('gulp'),
    uglifyJS   = require ('gulp-uglify'),
    del        = require('del');


// ===================================================
var rename = require ("gulp-rename");

gulp.task ('clean', function () {
  del (['./root/book']);
});

gulp.task ('copy', function () {
  gulp.src ("./root/_book/*")
      .pipe (gulp.dest ("./root/_book/"));
});

gulp.task ('delete', function () {
  del (['./root/_book']);
});

gulp.task ('js-uglify', function () {
  gulp.src ('./root/book/**/*.js')
      .pipe (uglifyJS ())
      .pipe (gulp.dest ('./root/js/'));
});

gulp.task ('gh-pages', function () {
  del (['./root']);
});