console.log(2 > 1); // best type of conversion

console.log("2" > 1); // kinda a problem here
console.log("02" > 1);

console.log(null > 0); // these typa conversions can put you in confusion
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === checks the data type as well

console.log("2" === 2);