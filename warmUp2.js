// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

function gcd ( a, b ) {
	if ( a % b === 0 ) {
		return b;
	}
		return gcd(b, a % b )
}

// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
<<<<<<< HEAD
//you can only add one at each summetion, you'll need to use recursion in this.

function sum ( a , b ) {
	if ( a === 0) {
		return b;
	}
		return 1 + sum( a-1, b )

	}
=======
//you can only add one at each summetion, you'll need to use recursion in this.
>>>>>>> bc4abbbe44759eb1f72f2abcc0629fd792b435cd
