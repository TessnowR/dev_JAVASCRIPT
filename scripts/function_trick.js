function sum(){
	var total = 0;
	for (var i =0; i< arguments.length; i++){
		total += arguments[i];
	}
	return total;
}

var result = sum(5,5,5,5);

console.log(result);