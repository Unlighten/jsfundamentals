//Data Types

//Strings

"This is a string!";
'This is also a string!';

"Words like these - 'it's can still work as long as it is in a different quote";
'A little bit like this - Tomas said "I think grass is green!"';

console.log("Thomas said 'I think grass is green!'".toUpperCase())
//toUpperCase() is considered a method
console.log('Couldn\'t things get any better'.length);
//.length is considered a property
// Challenge create a string that has your name and use the to Lowercase method 
//to make sure each character is lower case 

console.log("Aaron Moore".toLowerCase());

console.log('Aaron Moore'[0]);
//This 0 in your name would take only the first letter, and then you could edit it more.
console.log('aaron moore'[0].toUpperCase());
console.log('jay'[0].toUpperCase() + 'jay'[1] + 'jay'[2]);

//Challenge uppercase the 'm' in Home and put the string back together using string concatenation

console.log('Home'[0] + 'Home'[1] + 'Home'[2].toUpperCase() + 'Home'[3]);

console.log(typeof("Amber"));
//Numbers
console.log(typeof(3));
//Booleans
console.log(true);
console.log(4 == 5);
console.log("Test".length > "ego".length);
console.log(1 === "1");
console.log(1 == "1");