//iife create a scope to keep things from getting messy
//it is a function that can't close within a () because the outside will not be able to see what is on the inside of the function

let i = 4;
console.log(i);
(function(){ 
//this is wrapping the function, thus becoming an iife
	var arraigh = [];

	arraigh.push(i, i + 1, i +2);
		console.log(arraigh[0]);
		console.log(arraigh[1]);
		console.log(arraigh[2]);
})();
console.log(i);

//you should get back the integer of 4, 5, and 6

(function(){
//another iffy
	var superSecret = 195;
})();

console.log(superSecret);

//this will give you an error