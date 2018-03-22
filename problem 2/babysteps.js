var length = process.argv.length;
var sum = 0;
for (count =2; count< length; count++) {
	sum+= Number(process.argv[count]);
}
console.log(sum);