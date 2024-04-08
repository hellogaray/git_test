const container = document.querySelector("#container");

const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.setAttribute("style", "color: red")
paragraph.textContent = "Hey I’m red!";
container.appendChild(paragraph);

const headerThree = document.createElement("h3");
headerThree.classList.add("headerThree")
headerThree.setAttribute("style", "color: blue")
headerThree.textContent = "I'm a blue h3!"
container.appendChild(headerThree);

const newDiv = document.createElement("div");
newDiv.classList.add("newDiv");
container.appendChild(newDiv);

const headerOne = document.createElement("h1");
headerOne.classList.add("headerOne")
headerOne.textContent = "I'm a div!"
newDiv.appendChild(headerOne);

const paragraphTwo = document.createElement("p");
paragraphTwo.textContent = "ME TOO!";
paragraphTwo.classList.add("paragraphTwo");
newDiv.appendChild(paragraphTwo);



