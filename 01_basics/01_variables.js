const accountId = 56
let accountEmail = "deeksha@gmail.com"
var accountPassword = "676767"
accountCity = "New Delhi"

// accountId = 2 // not allowed

accountEmail = "shasha@gmail.com"
accountPassword = "343434"
accountCity = "Bangaluru"
let accountState;

console.log(accountId)
console.table([accountEmail, accountPassword, accountId, accountCity, accountState])

/* prefer not to use var 
because of issues in block scope and functional space
*/