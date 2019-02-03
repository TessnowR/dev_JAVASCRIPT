/*	Robert Tessnow-Ramirez
	St. Petersburg College
	May 23 2017 ©
	Professor: Adrian Tillman
*/
/*=======================================================================================================================================================
=            a. A function called larger that returns the larger of its two arguments. For example, the call larger(-2, 10) should return 4.            =
=======================================================================================================================================================*/
function larger(p1,p2){
	return Math.max(p1,p2);
}
console.log("a. function result: " + larger(15,100));
/*==========================================================================================================================================
=            b. A function that returns the average of its two arguments. For example, the call average(-2,10) should return 4.            =
==========================================================================================================================================*/
function average(p1,p2){
	return (p1 + p2) / 2;
}
console.log("b. function result: " + average(-2,10));
/*==========================================================================================================================================================================
=            c. A function called averageLst that returns the average of all of the items in an array. For example, averageLst([4, 5, 7, 2]) should return 4.5.            =
==========================================================================================================================================================================*/
function averageLst(p1){
	var total = 0;
	for (var i = 0; i < p1.length; i++) {
		total += p1[i];
	}
	return total / p1.length;
}
console.log("c. function result: " + averageLst([75,60,100,90]));
/*==================================================================================================================================
=            d. A function called randNum, that accepts two numbers and returns a random number between the two values.            =
==================================================================================================================================*/
function randNum(p1,p2){
	//returns a random number between min of p1,p2 inclusive and max of p1,p2 exclusive
	var num = Math.floor(Math.random() * (Math.max(p1,p2) - Math.min(p1,p2))) + Math.min(p1,p2);
	/* ensures that random number cannot be min of p1,p2 if it is then it adds one this ensure that
	   a random number that is between 2 values is return and not the values themselves.
	*/
	if (num === Math.min(p1,p2)) {
		return num + 1;
	} else{
		return num;
	}
}
console.log('d. function result: ' + randNum(10,2));
/*===========================================================================================================================================================================================================================================================
=            e. A function called median, that accepts three values and returns the median.
				The median of three values is the value that is greater than or equal to one of the other values
				and less than or equal to the remaining value.            =
===========================================================================================================================================================================================================================================================*/
function median(p1,p2,p3){
	var arr = [p1,p2,p3];
	arr.sort(function(a,b){a-b});
	return arr[1];
}
console.log("This is function e: " + median(1,2,3));
/*=========================================================================================================================================================================================
=            f. A function called numberOfZeroes that returns the number of zeros in a given array. For example, the call numberOfZeroes([4, 0, false, 5, 0]) should return 2.            =
=========================================================================================================================================================================================*/
function numberOfZeroes(p1){
	var zeroes = 0;
	for (var i = 0; i < p1.length; i++) {
		var item = p1[i];
		if (item === 0) {
			zeroes += 1;
		}
	}
	return zeroes;
}
console.log("This is function f: " + numberOfZeroes([4,0,false,5,0,'0',0.1,1.0]));
/*========================================================================================================================================================================================================================================
=            g. A function called cntOccurrences, that returns the number of occurrences of a given character in a string. For example, given the string "Rat-a-tat-tat" and the character t, your function should return 5.
            =
========================================================================================================================================================================================================================================*/
function cntOccurrences(p1){
	var Letter_search = 't';
	var num_letter_occurred = 0;
	for (var i = 0; i < p1.length; i++) {
		var character = p1.charAt(i);
		if (character === Letter_search) {
			num_letter_occurred += 1;
		}
	}
	return num_letter_occurred;
}
console.log("this is function g: " + cntOccurrences("Rat-a-tat-tat"));
/*=============================================================================================================================================================================================================================
=            h. A function called isPrime, that takes an array of numbers and returns an array containing the numbers that are prime. For example. The call isPrime([1, 5, 17, 25, 30]) should return [1, 5, 17].
            =
=============================================================================================================================================================================================================================*/
function isPrime(p1) {
	var prime_arr = [1,2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
	var my_primes = [];
	for (var i = 0; i < p1.length; i++) {
		if (prime_arr.includes(p1[i])) {
			my_primes.push(p1[i]);
		}
	}
	return "[" + my_primes + "]";
}		
console.log("this is function h: " + isPrime([1,5,17,25,30,16]));
