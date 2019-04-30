const gulp = require('gulp');
var Q = require('q'); //一个著名的异步处理的库 https://github.com/kriskowal/q
// gulp.task(),gulp.src(),gulp.dest(),gulp.watch()
gulp.task('default',function(){
  console.log('hello world');
});

gulp.src('app/src/**/*.js')
    .pipe(gulp.dest('dist'))

gulp.src('app/src/**/*.css') //此时base的值为app/src,也就是说它的base路径为app/src
  //设该模式匹配到了文件 app/src/css/normal.css
.pipe(gulp.dest('dist'))

gulp.task('one',function(cb){
  var deferred = Q.defer();
  // 做一些异步操作
  setTimeout(function() {
     deferred.resolve();
  }, 5000);
  return deferred.promise;
});

gulp.task('two',['one'],function(){
  console.log('two is done');
});