const user = {
    userName:"Rohan",
    loginCount: 12,
    isLoggedin: false,

    userDetails:function()
    {
        // console.log("This is user Details")
        // console.log(`Username: ${this.userName}`);
        // console.log(this);
    }
}
// console.log(user);
// console.log(user.userName);
// console.log(user.userDetails());
// console.log(this);


//Constructor function
//this gives us an empty object so using this.username,this.loginCount etc. we are filling value to the object
function User(username, isLoggedin, loginCount)
{
   this.username = username ;
   this.loginCount = loginCount;
   this.isLoggedin = isLoggedin;

   this.welcome = function()
   {
    console.log(`WELCOME ${this.username}`);
   }

   return this; // also if we don't write this implicitly defines
}

const userOne = new  User("Rohan",false,13)
const userTwo = new  User("Valkyrie",true,10) // it will override the userOne so here we use new keyword to create a different object of User
console.log(userOne.constructor); //constructor is the reference of self here in this case user
// console.log(userTwo);

//read about instanceof