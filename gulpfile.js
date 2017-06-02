var gulp = require('gulp'); //default
var sass = require('gulp-sass');//sass complie
var concatCss = require('gulp-concat-css');//compile css plugins into one file
var concat = require('gulp-concat'); //compile js plugins into one file
var watch = require('gulp-watch'); //sass compile to css
var serve = require('gulp-serve');

gulp.task('sass', function () {
  return gulp.src('docs/assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('docs/assets/css/'));
});
gulp.task('watch', function () {
  gulp.watch('docs/assets/scss/**/*.scss', ['sass']);
});
gulp.task('concat', function () {
    return gulp.src(
            [
                'docs/assets/js/jquery.min.js',
                 'docs/assets/js/tether.min.js',
                'docs/assets/bootstrap/js/bootstrap.min.js',
                'docs/assets/js/jquery.easing.min.js',
                'docs/assets/js/jquery.preloader.min.js',
                'docs/assets/js/wow.min.js',
                'docs/assets/js/jquery.flexslider-min.js',
                'docs/assets/js/modernizr.custom.97074.js',
                'docs/assets/js/masonry.pkgd.min.js',
                'docs/assets/js/imagesloaded.pkgd.min.js',
                'docs/assets/js/jquery.magnific-popup.min.js'
            ])
            .pipe(concat('plugins.js'))
            .pipe(gulp.dest('docs/assets/js/plugins/'));
});
gulp.task('concatCss', function () {
  return gulp.src([
      'docs/assets/bootstrap/css/bootstrap.min.css',
      'docs/assets/css/flexslider.css',
       'docs/assets/css/animate.css',
       'docs/assets/icons/css/ionicons.min.css',
       'docs/assets/css/magnific-popup.css'
  ])
    .pipe(concatCss("plugins/plugins.css"))
    .pipe(gulp.dest('docs/assets/css/'));
});

gulp.task('build', ['sass', 'concat', 'concatCss']);

gulp.task('serve', serve('docs'));

gulp.task('serve-template', serve({
  root: ['template/bizwrap3.0.1/html'],
  port: 3001
}));

gulp.task('default', ['build', 'watch', 'serve']);
