// import few functions from  gulp, gulp-sass, sass

const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');


/* Function that responsible to compile our sass
 from src function to dest function where by 
from here we get .css file */

function buildStyles() {

  // take file from source folder

    return src( 'sass/**/*.scss','src/**/*.vue')

  // compile file by sass function 

    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))

    // final css will contain only classes we used in ./**/*.html
    // purgecss filters unused css in a ./**/*.html then remain with used css in a final css
    
    .pipe(purgecss( { content: [ 'src/**/*.vue']}))
     
  // after compilation pass file to a destination folder in a root directory

    .pipe(dest('dist/css'));
}

/* function that watch our source files 
for changes from src directory 
when we make changes to src files it will
automatically run buildStyles function */

function watchTask() {
  watch([ 'sass/**/*.scss' ,'src/**/*.vue' ,'./**/*.html',  './**/*.js'], buildStyles);
}

/* in order to run this file we have to 
export it and run a series of functions
as appeared below  */

exports.default = series(buildStyles, watchTask);