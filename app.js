/**
 * Created by lyq on 16/1/13.
 */
'use strict';
var koa = require('koa');
var serve = require('koa-static');
var koaJson = require('koa-json');
var bodyParser = require('koa-bodyparser');
var path = require('path');

var controller = require('./router');
var socketio = require('./mc');

var app = koa();
app.use(bodyParser());
app.use(koaJson());
app.use(serve(path.join(__dirname, 'public')));
var server = require('http').createServer(app.callback());
var io = require('socket.io')(server);
socketio.register(io);
controller.register(app);
server.listen(8888,function(){
    console.log('web socket server listening 8888');
});

