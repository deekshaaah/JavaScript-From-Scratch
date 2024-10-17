// to print 
console.log("Hello, Deeksha!");  

// logging variables
var name = "Shasha";
console.log(name);

// logging two or more values
var fn = "Deepshikha";
var ln = "Singh";
console.log("First name: ", fn, "Last name:", ln);

// placeholders
var greet = "Hello", who = "World";
console.log("%s, %s!", greet, who);    // Hello, World!

//logging HTML elements
console.log(document.body);

//using window.alert()
alert('Warning!');
alert('Pause!');
console.log('Alert was dismissed');

//using window.prompt()
var age = prompt("Enter your age:");
console.log(age);

// using window.confirm()
if(window.confirm("Are your sure that you want to delete this?")){
    deleteItem(itemID);
}

//using DOM API

//using canvas elements
var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;

var ctx = canvas.getContext('2d');

ctx.font = '30px Cursive';
ctx.fillText("Hello world!", 50, 50);

document.body.appendChild(canvas);

