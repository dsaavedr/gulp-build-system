# Development system as proposed by [Justin Rexroad](https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js)

## Structure

`src` will contain all the work. `assets/stylesheets/style.css` will be created by Gulp after processing and combining SASS in `src/sass`. `bundle.js` will be created after combining and processing al files on `pug`.

### First steps (on gulpfile.js)

```javascript
var gulp = require('gulp');
```
