//Important when you declare functions and variables
//If you have a whole bunch of code and at the bottom you call your function, that is normal
//whenever you call a function, you could do it at the top with hoisting and it would make it the most important thing
//variables are a little more complicated with this concept

//say
var i = 2;
//hoisting moves it to the top, however it won't do the initialization
//you will probably get an undefined


var x = 5; // Initialize x
var y;     // Declare y

elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x + " " + y;           // Display x and y

y = 7;    // Assign 7 to y

//Here is another example