/*
	Robert Tessnow-Ramirez
	St. Petersburg College
	May 16 2017 ©
	Professor: Adrian Tillman

	Write a program called expressions.js, that evaluates the following expression and displays the results
	(remember to use exponential format to display the result):
*/

var sum = (3.31 * Math.pow(10,-8) * 2.01 * Math.pow(10,-7)) / (7.16 * Math.pow(10,-6)  + 2.01 * Math.pow(10,-8));
var s = sum.toExponential();
console.log("Evaluate the expression: (3.31 * 10^-8 * 2.01 * 10^-7) / (7.16 * 10^-6  + 2.01 * 10^-8)");
console.log("The sum of the expression in exponential format is: " + s); 
console.log(5^5);