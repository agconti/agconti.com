(function () {
    'use strict';

    var gulp = require('gulp'),
        browserSync = require('browser-sync'),
        reload = browserSync.reload,
        changed = require('gulp-changed'),
        concat = require("gulp-concat"),
        autoprefixer = require('gulp-autoprefixer'),
        sass = require('gulp-sass'),
        jsDest = 'js/dest',
        scssDest = 'css';

    // browser-sync task for starting the server.
    gulp.task('browser-sync', function () {
        browserSync({
            server: {
                baseDir: "./"
            }
        });
    });

    // javascript task
    gulp.task('js', function () {
        return gulp.src([
                'js/vendor/**/*.js',
                'js/custom/**/*.js'
            ])
            .pipe(changed(jsDest))
            .pipe(concat("main.js"))
            .pipe(gulp.dest(jsDest));
    });

    // Sass task, will run when any SCSS files change & BrowserSync
    // will auto-update browsers
    gulp.task('sass', function () {
        return gulp.src([
                'scss/**/*.scss',
                'scss/**/*.css'
            ])
            .pipe(changed('./scss/'))
            .pipe(sass())
            .on('error', console.error.bind(console))
            .pipe(autoprefixer('last 2 versions'))
            .pipe(gulp.dest(scssDest));
    });

    // Default task to be run with `gulp`
    gulp.task('default', ['js', 'sass', 'browser-sync'], function () {
        gulp.watch(['./**/*.html'], [reload]);
        gulp.watch(['scss/*.scss'], ['sass', reload]);
        gulp.watch(['js/custom/**/*.js', 'js/vendor/**/*.js'], ['js', reload]);
    });
}());