'use strict';

const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const sass = require('gulp-sass');


const paths = {
    scripts: './app/**/*.js',
    sass: './app/**/*.scss'
};


// Tasks

gulp.task('lint', () => {

    gulp.src(paths.scripts)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('bundle', () => {

    gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.min.css'
    ])
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', () => {
    
    gulp.src(paths.sass)
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['sass', 'bundle']);