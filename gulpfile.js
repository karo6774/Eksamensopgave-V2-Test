const {src, dest, parallel, watch: gulpWatch} = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const imagemin = require("gulp-imagemin");

const html = () =>
    src("src/index.pug")
        .pipe(pug())
        .pipe(dest("dist"));

const css = () =>
    src("src/*.scss")
        .pipe(sass())
        .pipe(cssnano())
        .pipe(dest("dist"));

const img = () =>
    src("src/img/**")
        .pipe(imagemin())
        .pipe(dest("dist/img"));

const watch = () => {
    gulpWatch("src/**/*.pug", html);
    gulpWatch("src/**/*.scss", css);
};

module.exports = {
    html,
    css,
    img,
    watch,
    default: parallel(css, html, img)
};
