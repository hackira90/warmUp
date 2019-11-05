// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

function reversed(str) {
	var st = "";
	var k = str.length;
	var j = 0;
	for (var i = k; i< 0 ; i--) {

		st[j]+=str[i]
		j++;
	}
	return st;
}