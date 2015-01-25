"use strict";
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var del = require('del');
var watch = require('gulp-watch');
var connect = require('gulp-connect');
var historyApiFallback = require('connect-history-api-fallback');

gulp.task('build', function () {
    gulp.src('./app/src/js/index.js')
        .pipe(browserify({
            insertGlobals : true
        }))
        //.pipe(uglify())
        .pipe(gulp.dest('./target'));

    gulp.src('./app/src/index.html')
        .pipe(gulp.dest('./target'));
});


gulp.task('clean', function (cb) {
    del(['./target'], cb);
});

gulp.task('watch', function () {
    gulp.watch('./app/src/**', ['build']);
});

gulp.task('connect', function () {
    connect.server({
        root: 'target',
        livereload: true,
        middleware: function (connect, opt) {
            return [ historyApiFallback ];
        }
    });
});


gulp.task('all', ['connect', 'watch']);
