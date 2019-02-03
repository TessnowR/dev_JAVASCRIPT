/*
	Robert Tessnow-Ramirez
	St. Petersburg College
	May 16 2017 ©
	Professor: Adrian Tillman

To round off an integer i to the next largest even multiple of another integer j, the following formula can be used:

next_multiple = i + j - i % j

For example, to round off 256 days to the next largest number of days evenly divisible by a week, values of i = 256 and j = 7 can be
substituted into the preceding formula as follows:

next_multiple = 256 + 7 - 256 % 7

                         = 256 + 7 - 4

                         = 259

Write a program called round.js to find the next largest even multiple for the following values of i and j:

i	j
365	7
12.258	23
996	4
*/

var next_multiple = 365 + 7 - 365 % 7;
console.log("If i = 365 and j = 7 then the next multiple is");
console.log(next_multiple + "\n");

var next_multiple = 12.258 + 23 - 12.258 % 23;
console.log("If i = 12.258 and j = 23 then the next multiple is");
console.log(next_multiple.toPrecision(2) + "\n");

var next_multiple = 996 + 4 - 996 % 4;
console.log("If i = 996 and j = 4 then the next multiple is");
console.log(next_multiple + "\n");