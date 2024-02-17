const accountId=125412;
let accountEmail="rohan@google.com";
var accountPassword="12345"
accountLocation="Maharastra"
let accountType;

//accountId=999777; // changing value of constant variable is not allowed
console.log(accountId);

console.table([accountId , accountEmail, accountPassword, accountLocation,accountType]); // gives output in tabular form
/*
    try to avoid using var datatype beacuse of block scope or function scope
*/