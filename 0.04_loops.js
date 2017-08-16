// Loops

/*


	for loop
	----------------

	while loop
	----------------

	for in loop
	----------------
	

	do while loop
	----------------
	runs atleast once

*/


//initialize var; have boolean expression;
//for (var i=0; i<11; i++){
//	console.log(i);
//}


//for (var x=0; x<21; x+=2){
//	console.log(x);
//}

//var name = "Aaron";

//for (var i = 0; i < name.length; i++){
//	console.log(name[i]);
//}

//console.log('\n');
//console.log('\n');  //gives you a space afterwards
//console.log('\n');


//var j = 0;

//while (j < 5){
//	j++;
//	console.log(j);
//}

//var u = 0;

//while (u < 100){
//	u = u + 10;
//	console.log(u);
//}

//while(true){
//	return false;
//}

//var studentName = "smita";
//   lcv           collection
// for (var l in studentName) {
// 	console.log(studentName[0].toUpperCase() + studentName.slice(1));
// 		if (studentName[0].toUpperCase() == true){
// 			return true;
// 		} else {
// 			return false;
// 		}
// }

//another way of doing it is

var studentName = "smita";
for (var l in studentName) {
	if (l == 0) {
		capSN = studentName[l].toUpperCase();
	} else {
		capSN += studentName[l];
	}
}

console.log(capSN);