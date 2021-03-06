/*
	Robert Tessnow-Ramirez
	St. Petersburg College
	May 16 2017 ©
	Professor: Adrian Tillman

If you arrange 15 dots in the shape of a triangle, you end up with an arrangement that might look something like this:

	       0

	     0  0

	   0  0  0

	 0  0  0  0

	0 0  0  0  0

The first row of the triangle contains one dot, the second row contains two dots, and so on.
In general, the number of dots it takes to form a triangle containing n rows is the sum of the 
integers from 1 through n. This sum is known as a triangular number. If you start at 1, the fourth 
triangular number is the sum of the consecutive integers 1 through 4 ( 1 + 2 + 3 + 4), or 10. 
A triangular number can also be generated by the formula:

triangularNumber = n * ( n + 1) / 2

for any integer value of n. For example, the 10th triangular number, 55, can be generated by 
substituting 10 as the value for n in the preceding formula. Write a program called triangular.js , that generates
a table of triangular numbers using the preceding formula. Have the program generate every fifth triangular number 
between 5 and 50 (that is, 5, 10, 15, ..., 50)
*/

//substitute n for the triangle number
var n = 50;
//	i starts the first value of the triangle number should display
i = 5;
while (i <= n) {
	// calculates triangle value i starting value is 5 and increments in multiples of 5
	triangularNumber = i * (i + 1) / 2;
	// displays the triangle number
	console.log("the " + i + "th " + "triangular number is " + triangularNumber);
	// increments i so that multiple of 5 for triangle value are returned
	i += 5;
}