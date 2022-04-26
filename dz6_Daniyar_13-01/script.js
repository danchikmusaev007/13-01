const obj = {
	name: 'Danchik',
	game: 'dota',
	rang: '80',
	scin: 'only_baba_skin',
	team: 'tima_rakov',
}
const New_obj = {
	...obj,
	key3: 'fortnite',
	key1: 'warface',
	key2: 'genshin'
}
console.log(New_obj)


const list = [

]


function render() {
	const exampleDiv = document.createElement('div');
	exampleDiv.setAttribute("class", "list");
	for(let i = 0; i < list.length; i++ ) {
			const divList = document.createElement('div');
			divList.setAttribute("class", "free");
			const p = document.createElement("p");
			p.innerHTML = list[i].text;
			divList.append(p);
			exampleDiv.append(divList);
	}
	const form = document.querySelector(".example");
	document.querySelector(".list").remove();
	form.append(exampleDiv)
}
btn.onclick = function() {
	const name = document.getElementById('nick_name')
	const obj = {
			id: list.length,
			text: "hi  " + name.value
	}
	this.append(list);
	list.push(obj);
	render()
}





//"use strict";
//const nameField = document.getElementById('name');
//const result = document.getElementById('message');
//
//function showMessage() {
  //result.value = `как ты братишка?, ${nameField.value}!`;
//}
//
//nameField.addEventListener('reade', showMessage);


