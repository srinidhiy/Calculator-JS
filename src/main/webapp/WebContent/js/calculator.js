/**
 * 
 */

 // finding html elements
 var expression = "";
 var b = '';
 var num = [];
 var ans;

function display(digit) {
	expression += digit;
	console.log(expression);
	document.getElementById("output").innerHTML = expression;
}

function solve() {
	try {
		let result = Function("return " + expression)();
		document.getElementById("output").innerHTML = result;
	}
	catch(e) {
		document.getElementById("output").innerHTML = "Error";
	}
}

function wipe() {
	console.log("Clearing");
	expression = ""
	document.getElementById("output").innerHTML = expression;
}

