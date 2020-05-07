var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }/*,
    online: true,
    tunnel: true,
    tunnel: "nefely",
    logLevel: "debug"*/
  });

  /*gulp.watch("*.html").on("change", reload);
  gulp.watch("css/*.css").on("change", reload);
  gulp.watch("js/*.js").on("change", reload);*/
  gulp.watch("*.html").on("change", reload);
  gulp.watch("*/*.html").on("change", reload);
  gulp.watch("*/*/*.html").on("change", reload);
  gulp.watch("*.css").on("change", reload);
  gulp.watch("*/*.css").on("change", reload);
  gulp.watch("*/*/*.css").on("change", reload);
  gulp.watch("*.js").on("change", reload);
  gulp.watch("*/*.js").on("change", reload);
  gulp.watch("*/*/*.js").on("change", reload);

  /*http://localhost:3000/*/ 
});