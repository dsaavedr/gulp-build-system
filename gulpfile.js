var gulp    = require('gulp'),
    gutil   = require('gulp-util')
    pug     = require('gulp-pug'),
    eslint     = require('gulp-eslint'),
    ugly    = require('gulp-uglify'),
    sass    = require('gulp-sass'),
    babel   = require('gulp-babel'),
    ap      = require('gulp-autoprefixer'),
    srcm    = require('gulp-sourcemaps'),
    concat  = require('gulp-concat'),

    del     = require('del'),
    bs      = require('browser-sync');


//// DEFAULT TASK

gulp.task('default', ['pug', 'bs', 'scripts', 'watch']);

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

gulp.task('scripts', ['eslint'], function() {
  gulp.src('src/js/**/*.js')
      .pipe(srcm.init())
      .pipe(babel({
        presets: ['es2015', 'react']
      }))
      .pipe(concat('bundle.js'))
      // only if gulp --type production
      .pipe(gutil.env.type === 'production' ? ugly() : gutil.noop())
      .pipe(srcm.write())
      .pipe(gulp.dest("public/assets/js"));
});

gulp.task('eslint', function() {
  return gulp.src('src/js/**/*.js')
             .pipe(eslint({
               baseConfig: {
                 'plugins': [
                   'react'
                 ],
                 'parserOptions': {
                   'ecmaVersion': 6,
                   'sourceType': 'module',
                   'ecmaFeatures': {
                     'jsx': true,
                     'modules': true
                   }
                 }
               }
             }))
             .pipe(eslint.format())
             .pipe(eslint.failAfterError());
});
