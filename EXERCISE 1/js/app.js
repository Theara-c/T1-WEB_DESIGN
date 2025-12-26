let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

//  1- Move the item 3 to the second container
// YOUR CODE !!
var moveItem = document.getElementById("container1").children[2];
container2.appendChild(moveItem);
//  2- Remove item 4
// YOUR CODE !!
var removeItem = document.getElementById("container2").children[0];
container2.removeChild(removeItem);

// 3- Create a new item 10 and add it to container 3
// YOUR CODE !!
var create = document.createElement("div");
create.className = "item";
create.textContent = 10;
container3.appendChild(create);

//  4- Set all items located in a blue container to red
// YOUR CODE !!
container1.style.color = "red";
container3.style.color = "red";
