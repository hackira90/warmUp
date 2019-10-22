// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

function classmate(tall, weight, name, gendre, country ){
	var obj = {};

	obj.gendre = gendre,
	obj.tall = tall,
	obj.weight = weight,
	obj.name = name,
	obj.country =
	 country
	
	return obj;
}

var mate1 = classmate(1.76, 70, "Farouk", "male", "Tunisia");
var mate2 = classmate(1.80, 75, "Ahmed", "male", "Lybia");
var mate3 = classmate(1.77, 73,  "Malik", "male", "Lybia");
var classMates =[mate1, mate2, mate3];
function displayFriend (mate) {
	var str = "";
= mate.name + 'a' + mate.gendre + ' and from ' + mate.country 
		+ "he's tall is : " + mate.tall + "he's weight is : " + mate.weight;
return str, 
}

function addFriend (arr, mate){
	arr.push(mate);
}

function nbOfMale(arr){
	var n = 0;
	for (var i=0; i < arr.lenght; i++){
		if(arr[i].gendre === 'male'){
			n++;
		}
	}
	return n;
}

function matching(query, array) {
	for var ( key in array)
	var str = query.split(' ');
	var arrQuery = query.split(' ');
	for (var i = 0; i < array.length; i++)
		for (var j = 0; j < arrQuery; j++)
			if ( array[i] === arrQuery[j] ){
				return true;
			}
				return false;
									
}