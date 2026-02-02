let num1 = parseFloat(process.argv[3]);
let num2 = parseFloat(process.argv[4]);

if (process.argv[2] == "add") {
	console.log(num1+num2);
}
else if (process.argv[2] == "meno") {
	console.log(num1-num2);
}
else if (process.argv[2] == "mul") {
	console.log(num1*num2);
}
else if (process.argv[2] == "div") {
	console.log(num1/num2);
}
