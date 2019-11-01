/* 1. Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

        Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

        Example:

            solution('XXI'); // should return 21

        Help:

            Symbol    Value
            I          1
            V          5
            X          10
            L          50
            C          100
            D          500
            M          1,000 
    
    2. Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
        Examples:

        toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

        toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
    
    3. In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
        Example

            filter_list([1,2,'a','b']) == [1,2]
            filter_list([1,'a','b',0,15]) == [1,0,15]
            filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

//Q-1 
//function convert Modern Roman to integer

function convert(n) {
  var k = 1;
  var V = 0;
  var I = 0;
  var X = 0;
  var L = 0;
  var C = 0;
  var D = 0;
  var M = 0;
  var arr = n.split('');
  var rom = ["I", "V", "X", "L", "C", "D", "M"];
  //itératre over an array to get number of duplicated Roman numvber
  for (var i = 0; i < arr.length; i++) {

      if(arr[i] === arr[i + 1]) {
      k++;
   }
    //itératre over an array to get the Roman numvber
    for (var j = 0; j < rom.length; j++) {
      if ("I" === arr[i] ){
        I = 1 * k;
      } else if("V" === arr[i] )  { 
       V = 5 * k;
  }
      else if("X" === arr[i] )  {
        X = 10 * k;
  } else if("L" === arr[i] )  {
        L = 50 * k;
  } else if("C" === arr[i] )  {
        C = 100 * k;
  } else if("D" === arr[i] )  {
        D = 500 * k;
    } else if ( "M" === arr[i] )
      M = 1000 * k;
  }
    
  }

  return X + V + I + L + D + C + M;
}



//////////Q-3

function 