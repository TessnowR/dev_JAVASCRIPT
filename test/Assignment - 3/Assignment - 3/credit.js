/*
	Robert Tessnow-Ramirez
	St. Petersburg College
	June 6 2017 ©
	Professor: Adrian Tillman

	Design and implement a program that will allow us to determine
	the length of time needed to pay off a credit card balance, as
	well as the total interest paid.
*/

/*=======================================
=           1. Display Welcome            =
=======================================*/
function displayWelcome() {
	return 'This program is used to determine the length of time needed to pay off'
	+'a credit card balance, as well as the total interest paid. ';
}
/*==================================================
=            2. calculateMinimumPayment            =
==================================================*/
'use strict'
var balance = 1500;
var mon_interest = 18;

function calculateMinimumPayment(balance,TAX_RATE) {
	return (balance * (TAX_RATE/100));
}

const TAX_RATE = 2;
var mon_accrued_interest = (mon_interest/ 100) / 12;
var min_payment = calculateMinimumPayment(balance,TAX_RATE);

function displayPayments(p1,mon_interest,min_payment) {
	console.log('Year\t' , 'Balance\t\t' , 'Payment Num\t' , '\tInterest Paid');
	var year = 1;
	var pymt_num = 1;
	var interest_paid = 0;
	var payment = calculateMinimumPayment(p1,TAX_RATE) - (p1 * mon_accrued_interest);
/*===========================================================================================
=            nested function year_increment displays the year only 1 time for each year            =
===========================================================================================*/
	function year_increment(){
		if(pymt_num === 1){
			year++;
			return 1;
		}
		else if(pymt_num % 12 === 0){
			return year++;
		}else {
			return '';
		}
	}
/*=====================================================================================================
=            nested function formatNumber formats the dollar output as well as spacing in console            =
=====================================================================================================*/
	function formatNumber (num) {
		if(num < 1000 & num > 100){
		return '  ' + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + '\t\t'
		}else if(num < 100 & num > 10){
		return '   ' + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + '\t\t'
		}else if(num < 10){
		return '    ' + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + '\t\t'
		}else{
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + '\t\t'
		}
	}
	
	while( p1 > 30 ){
	 	console.log( year_increment() + '\t',formatNumber((p1 - payment).toFixed(2)) + '\t',pymt_num++ + '\t\t',formatNumber((interest_paid += (p1 * mon_accrued_interest )).toFixed(2)));
	 	p1 -= payment;
	 	payment = calculateMinimumPayment(balance,TAX_RATE) - (p1 * mon_accrued_interest);
	 }
}
console.log(displayWelcome());
console.log('Balance on your credit card: ', balance);
console.log('Interest Rate:', mon_interest);
console.log('Assuming a minimum payment of 2% of the balance($20 min)')
console.log('Your minimum payment would be $',min_payment);
console.log(displayPayments(balance,mon_interest,min_payment));
