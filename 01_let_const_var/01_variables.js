const accountId = 2222756 // const can't be updated in another line of the code
let accountEmail = "royshawon@gmail.com" // this is the most used variable hoisting
var accountPassword = "12345"
accountCity = "Dhaka" //not a good practice but it works
let accountState

//accountId = 2 // not allowed, once you allowed with const

accountEmail = "royshawonsudipto@gmail.com";
accountPassword = "56789"
accountCity = "Sylhet"

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])