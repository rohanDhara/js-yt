

const user = {
    userName:"Rohan",
    place:"Barasat",
    welcomeUser: function()
    {
        console.log(`${this.userName},Welcome to our Website`); //this refers to the current context
        console.log(this);
    }
}

// user.welcomeUser();
// user.userName="Sanju";
// user.welcomeUser();

// console.log(this);

//Arrow Functions

const holdFunction=function()
{
    console.log(this); //returns a global object
}
//if we write 'this' inside objects it returns the current object
//if we write 'this' inside functions it returns the global object
// console.log(holdFunction());

// const addTwo = (num1,num2) => {
//     return num1+num2;  with braces we need to write return keyword otherwise it will not work
// }
// console.log(addTwo(5,5));

//const addTwo = (num1,num2) => num1+num2 here we doesnot have to write return keyword its called explicit return

//const addTwo = () => (num1+num2)

// const addTwo = () => {user.userName} //it will give you undefined so in this case we have to use parenthesis
const addTwo = () => ({user})
console.log(addTwo());