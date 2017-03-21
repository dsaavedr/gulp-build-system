var gulp    = require('gulp'),
    gutil   = require('gutil')
    pug     = require('gulp-pug'),
    jsh     = require('gulp-jshint'),
    ugly    = require('gulp-uglify'),
    sass    = require('gulp-sass'),
    babel   = require('gulp-babel'),
    ap      = require('gulp-autoprefixer'),
    srcm    = require('gulp-sourcemaps'),
    concat  = require('gulp-concat'),

    del     = require('del'),
    bs      = require('browser-sync');


//// DEFAULT TASK

gulp.task('default', ['pug', 'bs', 'watch']);

/// BROWSER-SYNC

gulp.task('bs', function() {
  bs({
    server: {
      baseDir: "./public"
    }
  });
});

//// WATCH TASKS

gulp.task('watch', function() {
  gulp.watch('src/pug/**/*.pug', ['pug']);
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/sass/**/*.sass', ['style']);
});

//// HTML TASKS

gulp.task('pug', function() {
  gulp.src(["src/pug/**/*.pug"])
      .pipe(pug({
        pretty:true
      }))
      .pipe(gulp.dest('public/HTML'));
});

//// CSS TASKS

gulp.task('style', function() {
  gulp.src('src/sass/**/*.sass')
      .pipe(srcm.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(srcm.write())
      .pipe(gulp.dest('public/assets/stylesheets'));
});

//// JAVASCRIPT TASKS

gulp.task('scripts', ['jshint'], function() {
  gulp.src('src/js/**/*.js')
      .pipe(srcm.init())
      .pipe(concat('bundle.js'))
      .pipe(gutil.env.type === 'production' ? ugly() : gutil.noop())
      .pipe(babel({
        presets: ['es2015', 'env']
      }))
      .pipe(srcm.write())
      .pipe(gulp.dest("public/assets/js"));
});

gulp.task('jshint', function() {
  return gulp.src('src/js/**/*.js')
             .pipe(jsh({
               esversion: 6
             }))
             .pipe(jsh.reporter('jshint-stylish'));
});
