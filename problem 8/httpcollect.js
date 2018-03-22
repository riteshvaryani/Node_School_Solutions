var http = require('http')
var url = process.argv[2];
http.get(url,function(response) {
	response.setEncoding('utf8');
	let body = "";
	response.on("data", (chunk) => {
		body += chunk;
	})
	response.on("end", () => {
		console.log(body.length);
		console.log(body);
	})
});