const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();


//compile scss into css
function style(){
    // 1. scss file
    return gulp.src('./scss/**/*.scss')
    // 2. sass compiler
    .pipe(sass())
    // 3. compiled css
    .pipe(gulp.dest('./css'))
    // 4. stream to browser
    .pipe(browserSync.stream());
}


function watch() {
    browserSync.init({
        server:{
            baseDir: './',
            //index: "/login.php"
        }
    })

    
    gulp.watch('./scss/**/*scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}


exports.style = style;
exports.watch = watch;
