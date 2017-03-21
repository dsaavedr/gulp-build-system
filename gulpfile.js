var gulp  = require('gulp'),
    pug   = require('gulp-pug'),
    jsh   = require('gulp-jshint'),
    del   = require('del');


//// DEFAULT TASK

gulp.task('default', ['pug','watch']);

//// WATCH TASKS

gulp.task('watch', function() {
  gulp.watch('src/pug/**/*.pug', ['pug']);
});

//// HTML TASKS

gulp.task('pug', function() {
  gulp.src(["src/pug/**/*.pug"])
      .pipe(pug())
      .pipe(gulp.dest('public'));
});
