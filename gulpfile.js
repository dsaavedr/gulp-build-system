var autoprefix= require('gulp-autoprefixer'),
    babel     = require('gulp-babel'),
    babelify  = require('babelify'),
    browserify= require('gulp-browserify'),
    concat    = require('gulp-concat'),
    eslint    = require('gulp-eslint'),
    gulp      = require('gulp'),
    gutil     = require('gulp-util')
    pug       = require('gulp-pug'),
    rename    = require('gulp-rename'),
    sass      = require('gulp-sass'),
    sourceMap = require('gulp-sourcemaps'),
    ugly      = require('gulp-uglify'),

    bs        = require('browser-sync'),
    del       = require('del'),
    reload    = bs.reload;


//// DEFAULT TASK

gulp.task('default', ['pug', 'scripts', 'bs', 'watch'], function () {
  if (gutil.env.type==='production') {
    process.env.NODE_ENV==='production'
  }
});

/// BROWSER-SYNC

gulp.task('bs', function() {
  bs({
    server: {
      baseDir: "./"
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
      .pipe(gulp.dest('public/assets/HTML'))
      .pipe(reload({
        stream: true
      }));
});

//// CSS TASKS

gulp.task('style', function() {
  gulp.src('src/sass/**/*.sass')
      .pipe(sourceMap.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefix({
        browsers: ['last 2 versions'],
        cascade: gutil.env.type!=='production'
      }))
      .pipe(gutil.env.type==='production' ? ugly() : gutil.noop())
      .pipe(sourceMap.write())
      .pipe(gulp.dest('public/assets/stylesheets'))
      .pipe(reload({
        stream: true
      }));
});

//// JAVASCRIPT TASKS

gulp.task('scripts', ['eslint'], function() {
  gulp.src('src/js/s1.js')
      // .pipe(babel({
      //   presets: ['es2015', 'react']
      // }))
      .pipe(sourceMap.init())
      .pipe(browserify({
        transform: babelify.configure({
          presets: ['es2015', 'react']
        })
      }))
      .pipe(gutil.env.type==='production' ? ugly() : gutil.noop())
      .pipe(rename('bundle.js'))
      .pipe(sourceMap.write())
      .pipe(gulp.dest('public/assets/js'))
      .pipe(reload({
        stream: true
      }));
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
