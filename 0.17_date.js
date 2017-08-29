//Date
//In order to put the date in a header or use the date at all, you must call it as a New Date object.
//For example:

//You are able to set the date and time or use a time zone like EST. 

<script>
var d = new Date();
document.getElementById("demo").innerHTML = d;

//or

var d = new Date("October 13, 2014 11:13:00");
document.getElementById("demo").innerHTML = d;
</script>