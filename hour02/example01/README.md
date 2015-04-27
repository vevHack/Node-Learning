# 用npm安装依赖包

这个例子介绍如何采用npm安装依赖包

用下面的命令试试看： 

    node foo.js

你会得到一个错误：node找不到underscore模块

这种第三方的模块都是需要安装的。 underscore.js安装，命令如下：

    npm install underscore

注意在：node\_modules文件夹下会创建相应的模块，underscore.js的源码就会下载到这个文件夹下

再次运行下面的命令启动程序

    node foo.js

这次应该就会成功

