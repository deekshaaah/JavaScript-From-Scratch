// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const idName = Symbol('123')

console.log(id === idName);

const bigNumber = 43434784287984278743n

// Reference (non-primitive)

// Array, Objects, Functions

const hero = ["robin", "starfire", "cyborg"];

let myObj = {
    name: "deeksha",
    age: 18,
}

const myFunction = function(){
    console.log("Hello World")
}

// Javascript is a dynamic typed language

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Deeksha"
let anotherName = myName

anotherName = "Shasha"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@bhim"
}

let userTwo = userOne

userTwo.email = "shasha@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);