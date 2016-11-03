/*
When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.
 */

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
	deleteBtn.addEventListener("click", btntest);

	//add the userinput into the new div and output it to the dom
	newDIV.innerHTML = userInput.value;
	newDIV.appendChild(deleteBtn);
	output.appendChild(newDIV);

	console.log("output", output); 
}

function btntest(){
	console.log("button test");
}

createBtn.addEventListener("click", createCard);

