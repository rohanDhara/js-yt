
class User{
    constructor(userName,email,password){
        this.userName = userName
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}pqr`
    }

    changeUsername(){
        return `${this.userName.toUpperCase()}`
    }

}

const messi = new User("messi","lm10@barcelona.com",1233);
console.log(messi.encryptPassword());
console.log(messi.changeUsername());

//behind the scene