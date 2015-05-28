var gulp       = require ('gulp'),
    uglifyJS   = require ('gulp-uglify'),
    del        = require('del');


// ===================================================

gulp.task ('minify', function () {
  gulp.run ('js-uglify');
});
gulp.task ('js-uglify', function () {
  gulp.src ('./root/book/**/*.js')
      .pipe (uglifyJS ())
      .pipe (gulp.dest ('./root/js/'));
});

// ===================================================

gulp.task ('gh-pages', function () {
  del (['./root']);
});