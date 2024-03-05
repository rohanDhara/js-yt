function setUser(userName)
{
    this.userName = userName;
    console.log("called");
}

function createUser(userName,email,password)
{
    //setUser(userName) //function is called but after assigning value setUser() will jump out of the call stack with all the values. That's why we are not getting the userName
    // so we have to hold the reference of the function using .call() and passing 'this',userName
    setUser.call(this,userName)
    this.email = email;
    this.password = password;
}

const user1 = new createUser("Rohan","gkcem@golang.go","15423")
console.log(user1);