var gulp = require("gulp"),
  sass = require("gulp-sass"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat");
sourcemaps = require("gulp-sourcemaps");
babel = require("gulp-babel");
postcss = require("gulp-postcss");
postcssScss = require("postcss-scss");
autoprefixer = require("autoprefixer");
flexibility = require("postcss-flexibility");

var scssSource = ["src/styles/main.scss"],
  scssWatch = ["src/styles/**/*.scss"],
  javascriptSource = ["src/js/**/*.js"],
  javascriptWatch = ["src/js/**/*.js"];

gulp.task("sass", function() {
  return gulp
    .src(scssWatch)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed"
      })
    )
    .pipe(postcss([flexibility]))
    .pipe(
      postcss([
        autoprefixer({
          cascade: true
        })
      ])
    )
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/css"));
});

gulp.task("js", function() {
  return gulp
    .src(javascriptSource)
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("watch", function(done) {
  gulp.watch(scssWatch, gulp.parallel("sass"));
  gulp.watch(javascriptWatch, gulp.parallel("js"));
  done();
});

gulp.task("default", gulp.series("sass", "js", "watch"));
