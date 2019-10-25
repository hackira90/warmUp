//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

function isSubset(arr, sub) {
	var stat=0;
	for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < sub.length; j++) {
				if( arr[i] === sub[j])
					stat += 1;
			}
	}
	if(stat === sub.length)	{
		return true;
	}
	return false;
}
