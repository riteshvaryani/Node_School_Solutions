var fs = require('fs');
var path = require('path');
var filter = process.argv[3];
var results = [];
fs.readdir(process.argv[2],(err,directories) => {
	if (err) {
	throw err;
	}
	
	var numberOfDirectories = directories.length;
	for (count = 0; count < numberOfDirectories; count++) {
		var extension = path.extname(directories[count]);
		var extensionwithoutdot = extension.substring(1);
		if (extensionwithoutdot == filter) {
			results.push(directories[count]);
		}
	}
	var totalResults = results.length;
	for (count = 0;count < totalResults; count++) {
			console.log(results[count]);
	}
	
});