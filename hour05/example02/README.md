# 添加response 代码 和 Header

在这个例子中我们采用 writeHead function 来发送一个HTTP response 代码
并且设置 header 头的 Content-Type 设置为text plain格式. 

启动Server

    node server.js

然后打开浏览器： [http://127.0.0.1:3000][1]

查看Header，会发现：

    curl -I http://127.0.0.1/

[1]: http://127.0.0.1:3000
