 // The function returns the product of p1 and p2
function exampleFunction(p1, p2) {
    return p1 * p2;
}
console.log(exampleFunction(4, 3));
//However nothing is printed to the console unless you use console.log
//It is important when calling the function to put in perameters for p1 and p2 in order for the function to run properly

//If we were to return the function without perameters, it would give us an NaN
function exampleFunction(p1, p2) {
    return p1 * p2;
}
console.log(exampleFunction());