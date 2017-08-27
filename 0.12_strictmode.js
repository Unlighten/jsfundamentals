//Strict mode applies to entire scripts or to individual functions.
//It doesn't apply to block statements enclosed in {} braces. 
//Attempting to apply it to such contexts does nothing. 

//Strict mode makes several changes to normal JavaScript semantics. 
//Strict mode eliminates some JavaScript silent errors by changing them to throw errors. 
//Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations:
	//strict mode code can sometimes be made to run faster than identical code that's not strict mode. 
//Strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.

// Whole-script strict mode syntax
'use strict';
var x = "This is strict mode script!";

//You can also use strict mode in functions
function strict() {
  // Function-level strict mode syntax
  'use strict';
  function nested() { return 'And so am I!'; }
  return "Hi!  I'm a strict mode function!  " + nested();
}
function notStrict() { return "I'm not strict."; }

//It seems that the whole purpose of strictmode is to secure Javascript/secure data.