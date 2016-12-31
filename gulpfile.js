var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var babelify = require('babelify');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var source = require('vinyl-source-stream');
var port = process.env.port || 5000;

gulp.task('browserify', function () {
    return browserify('./src/index.js')
        .transform(babelify, {
            presets: ['es2015', 'react']
        })
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(livereload());

});

gulp.task('connect', function () {
    connect.server({
        root : './',
        port : port,
        livereload : true
    })
});

gulp.task('js', function () {
    gulp.src('./dist/**/*.js')
        .pipe(connect.reload())

});

gulp.task('html', function () {
    gulp.src('./src/**/*.html')
        .pipe(connect.reload())

});

gulp.task('watch', function () {
    livereload.listen();

    gulp.watch('./dist/**/*.js', ['js']);
    gulp.watch('./src/**/*.html', ['html']);
    gulp.watch('./src/**/*.js', ['browserify']);


});

gulp.task('default', ['browserify']);

gulp.task('serve', ['browserify', 'connect', 'watch'])