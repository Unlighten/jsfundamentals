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



//Local Scope
//Variables defined inside a function are in the local scope. And they have a different scope for every call of that function. 
//This means that variables having the same name can be used in different functions. 
//This is because those variables are bound to their respective functions, each having different scopes, and are not accessible in other functions.



//Global Scope
//When you start writing JavaScript in a document, you are already in the Global scope. 
//There is only one Global scope throughout a JavaScript document.
//A variable is in the Global scope if it's defined outside of a function.