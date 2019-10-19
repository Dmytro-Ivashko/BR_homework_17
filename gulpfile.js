const gulp = require("gulp");
const sass = require("gulp-sass");
// const autoprefixer = require('gulp-autoprefixer');

function style() {
    return gulp.src("./style/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    // .pipe(autoprefixer({}))
    .pipe(gulp.dest("./style"))
}

function watch() {
    gulp.watch("./style/**/*.scss", style);
}

exports.style = style;
exports.watch = watch;
