//Variables
var name;

name = "Madyson";

console.log(typeof(name));
console.log(name);

var lastName = "Ward";

console.log(name.length);
console.log(name.toUpperCase());

//Challenge create 3 variables 'firstName and lastName' and concat them together
var firstName = "Aaron";
var lastName = "Moore";
var fullName = firstName + " " + lastName;
console.log(fullName);


//Vairable data types

//Variables scopes

var myName = "Aaron";
var myCell = 3174108061;
var myAge = 22;
var alive = true;
var saying = "See you later!";
console.log("My name is " + myName + " and my number is " + myCell + 
	" I am " + myAge + " years old, and some would say that most things I say are " +
	 alive + ". " + saying);

//Silver Challenge
var myNumber = 0;
myNumber = myNumber + 10 - 1;
myNumber = myNumber * 9;
myNumber = myNumber / 7;
console.log(myNumber);

//Gold Challenge
var currentAge = 22;
var maximumAge = 100;
var store = 50;
var yearsLeft = maximumAge - currentAge;
var daysLeft = yearsLeft * 365;
var total = daysLeft * store;
console.log("You will need " + total + "bags of Sour Patch to last until the age of " + maximumAge + ".");
