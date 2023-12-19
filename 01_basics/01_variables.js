const accountId = 155578
let accountEmail = "shilpesh@gmail.com"
var accountPassword = "12345"
accountCity = "mumbai"
let accountState;

// accountId = 2 // not allowed

accountEmail = "s@s.com"
accountPassword = "232323"
accountCity = "kolkata"


console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
