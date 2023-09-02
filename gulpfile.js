
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const image = require('gulp-image');
const uglify = require('gulp-uglify');
const sassGlob = require('gulp-sass-glob');
const browserSync = require('browser-sync').create();



function compileSass() {
    return gulp.src('./src/sass/theme/main.scss')
      .pipe(sassGlob())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(gulp.dest('./public/resources/css/'))
      .pipe(browserSync.stream());
  }
  
  function optimizeImages() {
    return gulp.src('./src/img/**/*')
      .pipe(image())
      .pipe(gulp.dest('./public/resources/images'));
  }
  
  function minifyJS() {
    return gulp.src('./src/**/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('./public/resources/js'));
  }
  

function serve() {
  browserSync.init({
    server: {
      baseDir: './public'
    },
    files: ['./public/**/*.html'] // Add this line
  });

  gulp.watch('./src/sass/theme/**/*.scss', compileSass);
  gulp.watch('./src/img/**/*', optimizeImages);
  gulp.watch('./src/**/*.js', minifyJS).on('change', browserSync.reload);
  gulp.watch('./public/**/*.html').on('change', browserSync.reload);
}

const build = gulp.parallel(compileSass, optimizeImages, minifyJS);

function dev(done) {
  return gulp.series(build, serve)(done);
}

exports.build = build;
exports.dev = dev;
exports.default = dev;