"use strict";

const gulp = require("gulp");
const scss = require("gulp-sass");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const imagemin = require("gulp-imagemin");
const cleanCSS = require("gulp-clean-css");

function style () {
	return gulp.src("source/scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(scss())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(sourcemaps.write("."))
  	.pipe(gulp.dest("source/css"))
  	.pipe(browserSync.stream())
};

function minimg () {
    gulp.src("source/img/*")
   	.pipe(imagemin())
    .pipe(gulp.dest("dist/img"))	
}

function mincss () {
  	gulp.src('source/css/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'))	
}

function watch () {
	browserSync.init({
		server: {
			baseDir: "source/"
		}
	})
	gulp.watch("source/scss/**/*.scss", style);
	gulp.watch("source/*.html").on("change", browserSync.reload);
};


exports.style = style;
exports.watch = watch;
exports.mincss = mincss;
exports.minimg = minimg;
