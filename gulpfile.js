const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

gulp.task('sass', () => gulp.src('./miniprogram/**/*.{css,wxss}')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({
        extname: '.wxss'
    }))
    .pipe(gulp.dest('./dist'))
);