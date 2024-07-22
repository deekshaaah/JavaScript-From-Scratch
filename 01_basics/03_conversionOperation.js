let score = null

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// 33 = 33
// 33abc = NaN (Not a number)
// true = 1, false = 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 = true, 2 = false
// ""= false
// "deeksha" = true

let str1 = "deeksha"
let str2 = " singh"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); // not appreciated if you write this as a code
console.log(1 + "2");

console.log(+true); // worse, don't do this!
console.log(+"");
console.log(+false);

let gameCounter = 100
++gameCounter;
console.log(gameCounter);