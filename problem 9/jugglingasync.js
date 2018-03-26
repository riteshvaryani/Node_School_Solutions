var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var getFunction = function (url,index, responseReceived) {
http.get(url, function(response) {
	let body = "";
	response.setEncoding('utf8');
	response.on("data", (chunk) => {
		body += chunk;
	})
	response.on("end", () => {
		return responseReceived(body);
	})
});
}
var result1 = getFunction(url1, 0, (arrayResponse1) => {
	getFunction(url2, 1, (arrayResponse2) => {
	getFunction(url3, 2, (arrayResponse3) => {
	console.log(arrayResponse1);
	console.log(arrayResponse2);
	console.log(arrayResponse3);
});
});
});
