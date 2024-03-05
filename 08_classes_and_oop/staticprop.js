class User{
    constructor(username)
    {
        this.username = username
    }

    logIn(){
        console.log(`${this.username} is logged in now`);
    }

    static logOutID(){
        return `@456$`
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email
    }
}

const user1 = new Teacher("rohan","rohan@mail.go")
user1.logIn();
console.log(user1.logOutID()); // we cannot access static functions by object reference. we have to use class-name.function()