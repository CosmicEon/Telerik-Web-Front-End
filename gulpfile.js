const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const deporder = require('gulp-deporder');
const htmlclean = require('gulp-htmlclean');
const newer = require('gulp-newer');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');


const folder = {
    src: './src/',
    dest: './dist/',
};

gulp.task('app:prod', () => {
    return require('./server');
});

// main entry point for development
// build is needed if there is no initial dist folder
gulp.task('dev', ['build', 'dev:server', 'dev:watch']);

// start server for dev
gulp.task('dev:server', () => {
    nodemon({
        script: 'server.js',
        ext: 'js html',
        env: { 'NODE_ENV': 'development' },
    });
});

// start watching for changes
gulp.task('dev:watch', () => {
    // html changes
    gulp.watch(folder.src + '*.html', ['html']);

    // sass changes
    gulp.watch(folder.src + 'css/**/*', ['sass']);

    // javascript changes
    gulp.watch(folder.src + 'js/**/*', ['js']);
});

// start building for production env
gulp.task('build', ['html', 'sass', 'js']);

gulp.task('html', () => {
    return gulp.src(folder.src + '*.html')
        .pipe(newer(folder.dest)) // checks if src files are newer than in dest folder
        .pipe(htmlclean())
        .pipe(gulp.dest(folder.dest));
});

gulp.task('sass', () => {
    return gulp.src(folder.src + 'css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(folder.dest + 'css/'));
});

gulp.task('js', () => {
    return gulp.src(folder.src + 'js/**/*.js')
        .pipe(newer(folder.dest + 'js/'))
        .pipe(babel({
            presets: ['env'],
        }))
        .pipe(deporder()) // reads dependencies on js files
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(folder.dest + 'js/'));
});
