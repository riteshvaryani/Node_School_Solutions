var net = require('net');
var port = process.argv[2];

var server = net.createServer(function listener(socket) {
		var currentDate = new Date();
		var data = currentDate.getFullYear() + "-" + ("0" + (currentDate.getMonth() + 1)).slice(-2) + "-" + ("0" + currentDate.getDate()).slice(-2) + " " + ("0" + currentDate.getHours()).slice(-2) + ":" + ("0" + currentDate.getMinutes()).slice(-2) + "\n";
		socket.end(data);
});
server.listen(port);
