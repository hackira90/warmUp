// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

<<<<<<< HEAD
var females = ["hania", "lina", "insaf", "ons", "fooz", "houda", "ruba", "fatima", "amera"];
var males = ["ahmed", "omar", "farouk", "mohamed", "anass"];
var instructors = ["seif", "tamara", "youssef", "matt"]
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

function middleArray (arr) {
	var m = arr.length ;
	if (m % 2 === 0) {
		return arr[ (m / 2) - 1];
	}
		return arr[(m - 1) / 2];
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.

function multyOfTwo (array) {
	var arr = [];

	for (var i = 0; i < array.length; i++){
		if (i % 2 === 0) {
			arr.push( array[i] * 2 );
		} else { 
		 arr.push(array[i]);
		}
	}
	return arr;
}
=======
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
>>>>>>> bc4abbbe44759eb1f72f2abcc0629fd792b435cd
