'use strict';

const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');


const paths = {
    modules: './app/**/_*.js',
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
        './node_modules/angular/angular.min.js',
        './node_modules/angular-ui-router/release/angular-ui-router.min.js',
    ])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('dist'));

    gulp.src([
        './node_modules/flexboxgrid/dist/flexboxgrid.min.css',
        './node_modules/bootstrap/dist/css/bootstrap.min.css'
    ])
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('scripts', () => {

    gulp.src([paths.modules, paths.scripts])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', () => {
    
    gulp.src(paths.sass)
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['sass', 'scripts', 'bundle']);