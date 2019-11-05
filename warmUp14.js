/*
Say you have an array for which the i element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

	var maxProfit = function(prices) {
	  var max ;
	  var k = 0;
	  for (var i = 1; i < prices.length; i++) {
	  	if (prices[prices.length] === 1 ) {
	  		 max = 0;
	  	} 
	  	}
	  

	  return max;
	};



	var maxProfit = function(prices){
		  var max ;
		  var min ;
		  
		  for (var i = 1; i < prices.length; i++) {
		  	if(prices[prices.length] === 1){
		  		max = 0;
		  	} else if(prices[i + 1] > prices[i] ) {
		  		 max = prices[i+1]
		  		 prices.splice(i,1);
		  		 for (var j = 1; j < prices.length; j++) {
		  		 	if ( prices[j + 1] > prices[j]){
		  		 		max = prices[j + 1];
		  		 	}
		  	} 
		  	}
		  return max - min;
		}