var importfilefiltermodule = require('./filteringmodule');
var printResult= function(err,result) {
	if (err) {
		console.log(err);
		return;
	}
	result.forEach(function(element1) {
		console.log(element1);
	});
}
importfilefiltermodule(process.argv[2],process.argv[3],printResult);