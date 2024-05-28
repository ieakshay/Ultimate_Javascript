var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);

//add item
function addItem(e){
    e.preventDefault();

// get input value
var newItem = document.getElementById("item").value

// create new li element
var li = document.createElement("li")
// add class to li
li.className = "list-group-item"
//add textNode with input value
li.appendChild(document.createTextNode(newItem))

itemList.appendChild(li)
}