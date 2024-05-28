// Select using getElementById 

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);

// items[1].textContent = 'HELLO';

// var arr = Array.from(items)
// console.log(arr)

// arr.forEach((item) => {
//     item.style.color = '#FF4719';
// })

// Select using querySelector

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 3px grey';

// var input = document.querySelector('input');
// input.value = 'Hi there'

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "send"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'blue';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'green'

// var nthItem = document.querySelector('.list-group-item:nth-child(2)')
// nthItem.style.color = 'maroon'

// querySelectorAll
// var titles = document.querySelectorAll('.title')
// console.log(titles)
// titles[1].textContent = "Bingo"

//  Traversing the DOM

var itemList = document.querySelector("#items");

// parentNode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = "#ccc"
// itemList.parentNode.style.padding = "10px"
// console.log(itemList.parentNode.parentNode)

// childNodes - it also includes line break as text node (not recommended to use)
// console.log(itemList.childNodes)

// children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// firstChild - it also includes line break as text node (not recommended to use)
// console.log(itemList.firstChild);

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.backgroundColor = "cyan";

// lastChild - it also includes line break as text node (not recommended to use)
// console.log(itemList.lastChild);

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.backgroundColor = "magenta";

// nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// nextElementSibling
// console.log(itemList.previousElementSibling);


// createElement

// create a div
// var newDiv = document.createElement("div");

// add class
// newDiv.className = "hello";

// add id 
// newDiv.id = "hello1";

// add attr
// newDiv.setAttribute("title", "Hello Div");

// create textNode
// var newDivText = document.createTextNode("Hello World");

// add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container')
// var h1 = document.querySelector('header h1')

// console.log(newDiv)

// insertBefore addes node before reference node as child of parent node

// container.insertBefore(newDiv, h1) // takes two parameters (where to insert, what to insert)

// newDiv.style.fontSize = "30px";



// DOM Part 3

// adding event listener 

// var button = document.getElementById("button").addEventListener('click', buttonClick);

// function buttonClick(e){
    // console.log("Button Clicked")
    // console.log(e)
    // document.getElementById("header-title").textContent = "Changed"
    // console.log(e.target)
    // console.log(e.target.id)

    // var output = document.getElementById("output")
    // output.innerHTML = `<h3>`+e.target.id+`</h3>`

    // console.log(e.type)

    // console.log(e.clientX)
    // console.log(e.clientY)

//     console.log(e.altKey)
//     console.log(e.ctrlKey)
//     console.log(e.shiftKey)

// }


// Types of events

// double click
// var button = document.getElementById("button").addEventListener("dblclick", runEvent);

// // mouse down
// var button = document.getElementById("button").addEventListener("mousedown", runEvent);

// // mouse up
// var button = document.getElementById("button").addEventListener("mouseup", runEvent);

// mouse enter

// var box = document.getElementById("box");

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');

itemInput.addEventListener('keydown', runEvent)

function runEvent(e){
    console.log('Event Type: '+e.type)
console.log(e.target.value)
}











