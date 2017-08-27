//Variables are local to the country. Fun fact
//If it is global, that means anyone can access it
//When you look at code, how can you tell what is global and what is local? 
//The answer is functions.

//Variables inside the Global scope can be accessed and altered in any other scope.

var name = 'Hammad';

console.log(name); // logs 'Hammad'

function logName() {
    console.log(name); // 'name' is accessible here and everywhere else
}
logName(); // logs 'Hammad'




// Global Scope

function someFunction() {
    // Local Scope #1
    function someOtherFunction() {
        // Local Scope #2
    }
}

// Global Scope

function anotherFunction() {
    // Local Scope #3
}

// Global Scope
