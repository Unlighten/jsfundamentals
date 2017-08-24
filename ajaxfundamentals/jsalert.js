$(document).ready(function(){
	$.ajax({
		type:'GET',
		url: 'http://swapi.co/api/planets/',
	})

.done(function(planets) {
	// console.log(data);
	planets = data.results
	for (let planet of planets) {
		$('#table').append('<tr><td>' + planet.name + '<tr><td>');
		}
	})
});




$(document).ready(function(){
	$.ajax({
		type:'GET',
		url: 'http://swapi.co/api/starships/',
	})

.done(function(starships) {
	// console.log(data);
	starships.results.forEach(function(s){
		$("#starships").append('<tr><td>') + s.name + '<td><tr>'
	})
})

$(searchName).on('click'), function(){
	let search = $(searchRes).val();

	$.ajax({
		type: 'GET',
		url: 'https://swapi.co/api/people/?search=' + search
	}).done(function(data){
		data.results[0] films.forEach*function(film){
			$(searchResult).append("<p>" + data.results[0].name + " " + film + "</p>")
		};
});

//list all of the planets in the table and starships in the other table
//make a search bar that lets you type in the name to search for an individual ship/planet

//this was very hard and still doesn't really work