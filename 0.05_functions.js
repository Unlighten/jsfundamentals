// Functions

//greeting();
function greeting() {
	console.log("Good morning!");
}
// parenthesis invokes our function so that it runs the code inside of it
greeting();

//challenge, create a function that says "Day 4 feeling great!" then call that function

function day(){
	console.log("Day " + 4 + " feeling great!");
}

day();

//scope

// Void Functions

// Functions with parameters

function greeting2(name){ //the argument is name. if you have multiple arguments and do not call them when you call the function, it will show up as undefined.
	console.log("Time to start coding " + name);
}

greeting2("Aaron");


function sum(num1, num2){
	console.log(num1 + num1 + num2);
}

sum(3, 4);


var fname = "Aaron";
function hello(){
	var lname = "Moore";
	console.log(fname + " " + lname);
}

hello();

if (1 == 1) {
	var sum = 2;
	console.log(sum);//2
}

console.log(sum);

//for (let i=0;i<11;i++){
//	console.log("Testing")
//}

//for (var i=0;i<11; i++) {
//	console.log("New Testing")
//}

function capitalize(name){
	var newname ="";
	for (var l in name){
//this is a way to figure out your problem	-  console.log(typeof(l));   l shows up as a string
		if (l == 0) {
			newname = name[l].toUpperCase();
		} else {
			newname += name[l];
		}
	}
	console.log(newname);
}
capitalize('aaron');

