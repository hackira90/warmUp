// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

function reverseStr (str) {
	var arr = str.split("");
	var rev = "";
	var j = 1;
	for (i = arr.length-1; i >= 0 ; i--) {
		 rev +=  arr[i] + j ;
		 j++;
	}

	return rev.slice(0,i);
}
// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

function twins(array) {
	var arr = [];
	var str = array[0];

	for (i = 1; i < array.length; i++) {
		if (str.length === array[i].length) {
			arr.push(array[i],str);
		}
	}
	
	return arr;
}