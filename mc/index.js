/**
 * Created by yeanzhi on 16/5/16.
 */
'use strict';

//和服务端建立链接
var net = require('net');
var client = new net.Socket();
let socket = null;

var sendMsgToServer = function(msg){
    client.write(msg);
};

var sendMsgToWebSocketClient = function(data){
    if(!!socket){
        socket.emit('output-default-instruction',data.toString());
    }
};

var sendInputResponseToWebSocketClient = function(data){
    if(!!socket){
        socket.emit('input-default-instruction-res',data.toString());
    }
};

exports.register = function (io) {
    client.connect(8889, '127.0.0.1', function() {
        io.on('connection', function (_socket) {
            socket = _socket;
            socket.on('disconnect', function () {
            });
            socket.on('ping',function(){
                socket.emit('pong')
            });
            socket.on('input-default-instruction',function(msg){
                sendMsgToServer(msg);
                sendInputResponseToWebSocketClient(msg)
            })
        });
    });
    //从 socket server 返回数据
    client.on('data', function(data) {
        sendMsgToWebSocketClient(data);
    });

    client.on('close', function() {
        console.log('Connection closed');
    });
};