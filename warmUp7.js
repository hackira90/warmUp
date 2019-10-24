// 1-using + operator combine your partner first and last name .
function name(first, last) {
	var fullName = '';	
	return "Your partner full name is : " + first + ' ' + last;
}

name("mohamed","sbeta") //=> "Your partner full name is : mohamed sbeta"
// 2-find if the number 13 is a multiple of 3 or not.
function multiple(n) {
	if ( n % 3 === 0 ) {
	return n + ' is a multiple of 3';
	}
	return n + ' is not a multiple of 3';
}

multiple(13); //=> "13 is not a multiple of 3"

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]

var ages = [13, 14, 13, 15, 16, 17, 19, 13, 16, 15];
function average(arr){
	var m = 0;
	for (i = 0; i < arr.length; i++){
		m += arr[i];
	}
	return "The average age is : " + (m / arr.length); 
}

average(ages); // => "The average ages is : 15.1".
// 4-calculate your age in seconds.

function ages(n) {
	var age = n * 365 * 24 * 60 * 60;
	return 'Your age in secondes is : ' + age + ' secondes';
}

ages(28); // => "Your age in secondes is : 883008000"


