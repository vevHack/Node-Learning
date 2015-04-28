# 创建一个 redirect 

在这个例子中，我们使用 writeHead function 来发送一个 301 相应码 并且发送一个本地header. 这会执行 redirect 到互联网上的大多数牛逼站点

启动Server

    node server.js

然后打开浏览器 [http://127.0.0.1:3000][1]

检查header头：

    curl -I http://127.0.0.1/

[1]: http://127.0.0.1:3000
