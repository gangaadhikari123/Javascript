const accountId = 123
let accountEmail = "abcd@gmail.com"
var accountPassword = "12344"
 let accountCity = "Jaipur"
 let accountState;

// let can be changed
accountEmail = "122334"
accountCity ="Pokhara"
console.log(accountEmail);
//acountId =2; //not allowed
/*
prefer not to use var 
because of issuse in block 

*/
console.log([accountId, accountEmail, accountPassword, accountCity]);
// for creating in tabular forn we use console.table
console.table([accountId, accountEmail,accountState, accountCity])

