/**
 * Created by vevHack on 2015/7/15.
 */

var MenuBar = {
    refresh: function () {
        console.log('刷新菜单界面');
    }
};
/*var setCommand = function (button, func) {
 button.onclick = function () {
 func();
 }
 };
 var RefreshMenuBar = function (receiver) {
 return function () {
 receiver.refresh();
 }
 };*/

var RefreshMenuBar = function (receiver) {
    return {
        execute: function () {
            receiver.refresh();
        }
    }
};

var setCommand = function (button, command) {
    button.onclick = function () {
        command.execute();
    }
};
var refreshMenuBarCommand = RefreshMenuBar(MenuBar);
setCommand(button1, refreshMenuBarCommand);