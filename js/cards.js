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
	
	//create the delete btn and add the text delete to it.
	var deleteBtn = document.createElement("button");        
	deleteBtn.textContent = "Delete";  

	//add the userinput into the new div and output it to the dom
	newDIV.innerHTML = userInput.value + " (a button here??)";
	output.appendChild(newDIV);

	console.log("output", output); 
}

// function createDeleteBtn() {
// 	var deleteBtn = document.createElement("button");        
// 	deleteBtn.textContent = "Delete";     
// 	output.appendChild(deleteBtn).addEventListener("click", btntest);
// }

// function btntest(){
// 	console.log("button test");
// }

createBtn.addEventListener("click", createCard);

