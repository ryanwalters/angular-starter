'use strict';

const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const sass = require('gulp-sass');
const shell = require('gulp-shell');


const paths = {
    scripts: './app/**/*.js',
    sass: './app/**/*.scss'
};


// --- Lint

gulp.task('lint', () => {

    gulp.src(paths.scripts)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


// --- Bundle external CSS assets

gulp.task('bundle', () => {

    gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.min.css'
    ])
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('dist'));
});


// --- Compile SASS

gulp.task('sass', () => {
    
    gulp.src(paths.sass)
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'));
});


// --- Webpack

gulp.task('webpack', shell.task(['webpack']));


// --- Watch JS and CSS files

gulp.task('watch', () => {
    gulp.watch(paths.scripts, ['webpack']);
    gulp.watch(paths.sass, ['sass']);
});


// --- Default

gulp.task('default', ['sass', 'bundle', 'webpack']);