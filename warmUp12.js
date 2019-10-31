/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */


 // function sort(str, n) {
 //    //var min = ;
 //    //var max = ;
 //    var arr = [];
 //    for (var i = 0; i < n; i++){
 //        if(str[i] = 1){
 //        arr.push(str[i], str[i + 1]);
 //    }
 //    }
 //    return arr;
 // }


 ///////////////
function sort(str, n) {
    var arr = [];
    var acc = [];
    var maxi = [];
    var mini = [];
    var result = [];
    for (var i = 0; i < n; i++){
        if(str[i] == 1){
        arr.push(str[i],str[i + 1]);
        i++;
        }else{
        arr[i]=str[i]
}
    
    }

    for (var j = 0; j < arr.length; j++){
        if (arr[j] == 1){
        acc[j]=arr[j]+arr[j + 1];
        }else{
        acc[j]=arr[j]
    }

    }

    for (var k = 1; k < arr.length; k++){
        var max = acc[0];
        var min = acc[0];
        if (arr[k] > max){
            maxi = max;
             } else { 
            mini = min }
        
        result.push(min,max) 
    }

    return result;

 }