var gulp       = require ('gulp'),
    uglifyJS   = require ('gulp-uglify'),
    del        = require('del');

gulp.task ('clean', function () {
  del (['./root/book']);
});

gulp.task ('js-uglify', function () {
  gulp.src ('./root/book/**/*.js')
      .pipe (uglifyJS ())
      .pipe (gulp.dest ('./root/js/'));
});

gulp.task ('gh-pages', function () {
  del (['./root']);
});