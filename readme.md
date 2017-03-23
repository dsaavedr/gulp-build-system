# Personal variation of the build system proposed by [Justin Rexroad](https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js)

## Structure

`src` contains all the work. `assets/stylesheets/style.css` will be created by Gulp after processing and combining SASS in `src/sass`. `bundle.js` will be created after combining and processing al files on `js`.

### Setup (on gulpfile.js)

The file contains the following -pretty common- tasks:

1. Default task that calls to all minor build tasks, browser-sync and watches for changes and reacts accordingly.
2. HTML task that compiles `pug` (didn´t add much else because I usually keep my HTML light)
3. CSS tasks that compiles `sass`, sourcemaps, autoprefixes compiled CSS and uglifies it if `NODE_ENV` is on production mode (which I set up whenever `gulp --type production` gets called)
4. Javascript tasks that do the following:
  1. Calls `Eslint`, which evaluates all files on `src/js/**/*.js` using `react`, `es6` and `jsx` plugins
  2. Sourcemaps
  3. Uses `Browserify` to compile `public/assets/js/bundle.js`, which contain all necessary code
  4. `Browserify` calls `Babelify`, which compiles the code with `es2015` and `react` env plugins.
  5. Uglifies it if `gutil.env.type === 'production'`
  6. Renames the file `bundle.js`
