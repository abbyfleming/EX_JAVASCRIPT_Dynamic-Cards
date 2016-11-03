
var input = document.getElementById("userInput");
var output = document.getElementById("output");
var createBtn = document.getElementById("create");


function createCard(){
	//create a new div and add the class card to it.
	var newDIV = document.createElement("DIV");
	newDIV.className += 'card';

	//create the delete btn, add the text delete to it, add event listener
	var deleteBtn = document.createElement("button");        
	deleteBtn.textContent = "Delete";  
	deleteBtn.className += 'button';
	deleteBtn.addEventListener("click", deleteCard);

	//add the userinput into the new div and output it to the dom
	newDIV.innerHTML = userInput.value;
	newDIV.appendChild(deleteBtn);
	output.appendChild(newDIV);
}

function deleteCard(event){
	var targetCard = event.target.parentElement;
	targetCard.parentNode.removeChild(targetCard);
	//console.log(event); --> Mouse Event
	//console.log(event.currentTarget); --> The Button
	//console.log(event.target.parentElement); --> The Card
}

createBtn.addEventListener("click", createCard);

