// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"

//declare the craziest function so far
function crazy(string) {
	//split every character into an array
	var str = string.split('');
	//create an empty array with length of the sring given
	var char = new Array(string.length)
	//foor loop to push 0 in every element 
	for (var j = 0; j < char.length; j++) {
		char[j] = 0;
	}
	//2 for loops to extract the identical element in the string   
	for (var i = 0; i < str.length; i++) {
		char[i] = 1;
		for (var k = 0; k < string.length; k++) {
		if(string[k] === str[i])
			char[k+1] = char[k] + 1;
	}
    }
    //transform the element in the finale array into string
	return char.join("");
}