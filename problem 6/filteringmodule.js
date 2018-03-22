var fs = require('fs');
var path = require('path');

module.exports = function (directoryPath,extensionInput,callback){
var results = [];
fs.readdir(directoryPath,(err,directories) => {
	if (err) {
	return callback(err,null);
	}
	
	var numberOfDirectories = directories.length;
	for (count = 0; count < numberOfDirectories; count++) {
		var extension = path.extname(directories[count]);
		var extensionwithoutdot = extension.substring(1);
		if (extensionwithoutdot == extensionInput) {
			results.push(directories[count]);
		}
	}
	var totalResults = results.length;
	callback(null,results);
		
});
}