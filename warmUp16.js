// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.


function ballon(string) {
	//if statement for minimum length
	if(string.length <= 1){
		return "please entre a word with at least 1 character";
		//if statement for max length
	} else if(string.length >= Math.pow(10,4) ){
		return "please entre word with less character";
	} 
	var str = "";
	var arr = string.split('');
	var ball = 'balloon'.split('');
	var word = 1;
	var w = 0;
//for loop to check letter from the string
	for (var i = 0; i < arr.length; i++) {
		//foor loopto check letter from the ballon word
		for (var j = 0; j < ball.length; j++) {
			//if statement to check matching letter
			if(arr[i] === ball[j]){
				arr.splice(i,1);
				word++;
			}
		}
	}
	  w	= word/6;
	return  "there is : "+ w + " " + "ballon word in " + string ;
}
