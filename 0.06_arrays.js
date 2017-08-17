// Arrays

//let students = ['Aaron', 'Thomas' , 'Madyson', 'Brandon' , 'Leon', 22, true, ['Jackson', 'Perry']];

//console.log(typeof(students));

//console.log(students[2]);

//grab the nested array out of the students array and grab 'Perry' then print to the console "Hello Perry"


//console.log("Hello " + students[7][1]);

// students[7] = ['jackson', 'perry']  Student 7 is an array, so it is targeting the array and then from 
//there calling perry since he is numero uno

// ['jackson','perry'][0] == 'jackson'
// ['jackson','perry'][1] == 'perry'

// students[7][0] == 'jackson'

//let arrOfFood = ['Quesadilla', 'Pecan Pie', 'Potato', 'Cheesecake', 'Shrimp Pasta'];

//prints out the value instead of the index number
//arrOfFood.push('NY Style Pizza');
//index of item |  how many to cut | what you want to replace it with
//arrOfFood.splice(1, 1, 'Blueberry Pie');
//arrOfFood.splice(2, 0, 'Sweet Potato');
//arrOfFood.splice(4, 2);
//arrOfFood.pop(); pop removes the last item. in this case it removes ny style pizza cause pushing something adds it to the end, pop then removes it

//for(let foodItem of arrOfFood){
//	console.log(foodItem);
//}


//this is the same thing is that for loop above
//arrOfFood.forEach(function(foodItem){
//	console.log(foodItem);
//})


//let fruitApple = ['apple']; //you are not getting a "not a function" error when you use an array, but you do with one string

//fruitApple.forEach(function(carrot){
//	console.log(carrot);
//})

//for(let f in arrOfFood){
//	console.log(arrOfFood[f]);
//}

//Prints out the value instead of the index number
//for(let f of arrOfFood){
//	console.log(f);
//}

//let listOfNames = ['jim', 'phil', 'aaron', ['steve', 32]];
//function listy(listOfNames){}
//for(let y in listOfNames){
//	if (y == 0) {
//		console.log(listOfNames);
//	} else {
//		return false;
//	}
//}

var listOfMovies = ['Sparta', 'Spartan', 3 , 5 , 'Spark']

listOfMovies.forEach(function(movie, squid){
	if (1 == 1) {
		console.log(movie);
		console.log(squid);
	} else {
	return false;
	}
})