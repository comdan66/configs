var gulp       = require ('gulp'),
    uglifyJS   = require ('gulp-uglify'),
    htmlmin    = require('gulp-html-minifier'),
    del        = require('del');


// ===================================================

gulp.task ('minify', function () {
  console.info ('\n== Start minify.. =================================================\n');

  console.info ('\n== Run js-uglify.. ================================================\n');
  gulp.run ('js-uglify');

  console.info ('\n== Run minify-html.. ==============================================\n');
  gulp.run ('minify-html');

  console.info ('\n== Finish minify! =================================================\n');
});
gulp.task ('js-uglify', function () {
  gulp.src ('./root/book/**/*.js')
      .pipe (uglifyJS ())
      .pipe (gulp.dest ('./root/js/'));
});
gulp.task ('minify-html', function () {
  gulp.src ('./root/book/*.html')
      .pipe (htmlmin ({collapseWhitespace: true}))
      .pipe (gulp.dest ('./root/'));
});

// ===================================================

gulp.task ('gh-pages', function () {
  console.info ('\n== Start gh-pages.. ===============================================\n');
  del (['./root']);
  console.info ('\n== Finish gh-pages! ===============================================\n');
});