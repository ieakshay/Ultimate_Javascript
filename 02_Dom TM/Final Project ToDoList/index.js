var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// filter item
filter.addEventListener('keyup', filterItems)


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

// create delete button
var deleteBtn = document.createElement('button');

// add class to delete button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//Append text node
deleteBtn.appendChild(document.createTextNode('X'));

// Append button to li
li.appendChild(deleteBtn);

// Append li to list
itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
       if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
       }
    }
}

function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();

    //get lis
    var items = itemList.getElementsByTagName('li')

    // Connvert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }

    })
}