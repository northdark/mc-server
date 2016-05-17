mc 相关托管服务

pm2 启动mc/server.js  创建socket监听8889端口,并启动mc服务端

pm2 启动 app.js 会创建一个tcp客户端并链接server的socket,同时创建一个websocket用来接收指令和推送日志

启动web

./deploy.sh

启动服务[启动一次就行,重启web不影响服务]

pm2 start ./mc/server.js

