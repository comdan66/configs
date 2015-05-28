var gulp       = require ('gulp'),
    uglifyJS   = require ('gulp-uglify'),
    htmlmin    = require('gulp-html-minifier'),
    del        = require('del');


// ===================================================

gulp.task ('minify', function () {
  gulp.run ('js-uglify');
  // gulp.run ('minify-html');
});
gulp.task ('js-uglify', function () {
  gulp.src ('./root/book/**/*.js')
      .pipe (uglifyJS ())
      .pipe (gulp.dest ('./root/js/'));
});
gulp.task ('minify-html', function () {
  gulp.src ('./root/book/**/*.html')
      .pipe (htmlmin ({collapseWhitespace: true}))
      .pipe (gulp.dest ('./root/'));
});

// ===================================================

gulp.task ('gh-pages', function () {
  del (['./root']);
});