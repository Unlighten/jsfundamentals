// Objects

let food = {
	pies: ['Pecan', 'Blueberry', 'Cherry', 'Key Lime'], //we set our array
	getPies: function(){ 								//we create a new function
		console.log(this);								//we plug this/food into our console
		return this.pies;								//we return this/food with .pies because we want to return the pies from the food object
	},
				pieName: function(){					//we create a new function
		pieNames = []									//we create our empty array
		this.pies.forEach(function(x){                  //we call the food object with pies and we set our for loop with a new function of x, again.. 
														  //containing food/this, and pieNames
			pieNames.push(x + ' pie')     //we call our empty array and push our pies into the array, while appending ' pie' to the end of each pie
		})
		return pieNames									//we return the pieNames that we created in our new array
	}
}



//console.log(food.getPies());
//console.log(food.pies[0]);
// food.getPies();

//console.log(food.pies[0] + " pie");


//challenge iterate over the pie array and print out each pie, and add 'pie' to them
//using the forEach() method

//food.pies.forEach(function(pies){
//	console.log(pies + " pie");
//})

//create a method inside of the object food that appends ' pie'


console.log(food.pieName())								//we console our food object with our new pie names
