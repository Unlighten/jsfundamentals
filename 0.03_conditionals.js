// Conditionals

var name = "aaron";

if ("aaron" == name) {
	console.log("Hey your name is " + name);
	}else{
		console.log("I'm not allowed to talk to strangers.");
	}

var newname = "aaron";

if (newname == "Aaron"){
	console.log("Hello Aaron!")
}else{
	console.log(newname[0].toUpperCase() + name.slice(1));
}


//another way to do it is

if (newname[0] != newname[0].toUpperCase()) {
	newname = newname[0].toUpperCase() + newname[1] + newname[2] + newname[3] + newname[4];
	console.log("Horrible punctuation, you need to uppercase the first letter like this: " + newname.toUpperCase());
	}else{
		console.log("Great punctuation!");
	}

var age = 23;

if (age >= 25) {
	//when writing if statements, order will matter
	console.log("Yay you can rent a car!");
} else if (age >= 21) {
	console.log("Yay you can drink!");
} else if (age >= 18) {
	console.log("Yay you can vote!");
} else {
	console.log("Sorry too young to do anything!");
}