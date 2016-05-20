/**
 * Created by yeanzhi on 5/20/16.
 */
'use strict';
'use strict';
var net = require('net');
var path = require('path');
var spawn = require('child_process').spawn;

var clients = [];
var broadcast = function(message) {
    clients.forEach(function (client) {
        client.write(message);
    });
    console.log(message);
};

let child = spawn('sh', [path.join(__dirname,'ngrok.sh')]);

child.stdout.on('data', function (data) {
    broadcast(data.toString());
});

child.stderr.on('data', function (data) {
    broadcast(data.toString());
});

child.on('exit', function (code, signal) {
    console.log('child process eixt ,exit:' + code);
    throw new Error();
});

// Start a TCP Server
net.createServer(function (socket) {
    // Identify this client
    socket.name = socket.remoteAddress + ":" + socket.remotePort+(new Date().getTime());
    // Put this new client in the list
    clients.push(socket);
    // Handle incoming messages from clients.
    socket.on('data', function (data) {
        child.stdin.write(`${data}\n`);
    });
    // Remove the client from the list when it leaves
    socket.on('end', function () {
        clients.splice(clients.indexOf(socket), 1);
    });
}).listen(8890);