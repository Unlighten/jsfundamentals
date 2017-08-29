$(document).ready(function(){

	characterList = []

	$.ajax({
			type: 'GET',
	 		url: 'https://api.got.show/api/characters'
	}).done(function(data){
		data.forEach(function(character){
			if(character.house){
				let newChar = {
					name: character.name,
					house: character.house,
				}
				characterList.push(newChar)
			}
		})
	})
	console.log(characterList)
		

	$(searchName).click(function(){
		searchedName = nameField.value
		console.log(searchedName)
		characterList.forEach(function(character){
			if(searchedName == character.name){

				let tr = document.createElement('tr')
				let name_td = document.createElement('td')
				let house_td = document.createElement('td')

				name_td.innerHTML = character.name
				house_td.innerHTML = character.house

				tr.appendChild(name_td)
				tr.appendChild(house_td)

				$(searchResult).append(tr)
				
			}
		})
	})
})


	$.ajax({
			type: 'GET',
			url: 'https://api.got.show/api/characters/locations/',
		}).done(function(allCharacters){
			let peopleObj = {
				people : []
			}
			allCharacters.forEach(function(s){
				$("#characterTable").append('<tr><td>'+ s.name + '</td>' + '<td>' + s.locations + '</tr>')
				peopleObj.people.push(s.name);
			})
			localStorage.setItem('allCharacters', JSON.stringify(peopleObj))
		})
