/**
 * Created by Zen on 2015/4/27.
 */
var fs = require('fs');
/*
 * 读取index.config里面的二进制数据
 * */
function getFileData(callback) {
    fs.readFile('index.config', function (data) {
        callback(data);
    });
}
/*
 * 异步执行等待1秒
 * */
function returnData(callback) {
    getFileData(function (data) {
        setTimeout(function () {
            callback(data);
        }, 1000);
    });
}
