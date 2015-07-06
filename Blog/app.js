var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

//生成一个express实例
var app = express();

//设置views文件夹为存放模板文件的，__dirname为当前执行脚本的目录
app.set('views', path.join(__dirname, 'views'));
//设置模板引擎为:ejs
app.set('view engine', 'ejs');

//在 public 目录下存放图标 /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//加载日志中间件
app.use(logger('dev'));
//加载解析json
app.use(bodyParser.json());
//加载url编码的中间件
app.use(bodyParser.urlencoded({extended: false}));
//加载解析cookie的中间件
app.use(cookieParser());
//设置public文件夹为存放静态文件的地方
app.use(express.static(path.join(__dirname, 'public')));
//路由控制器
app.use('/', routes);
app.use('/users', users);

// 捕获404，并且转发到错误处理器
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
