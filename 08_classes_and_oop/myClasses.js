
// class User{
//     constructor(userName,email,password){
//         this.userName = userName
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}pqr`
//     }

//     changeUsername(){
//         return `${this.userName.toUpperCase()}`
//     }

// }

//const messi = new User("messi","lm10@barcelona.com",1233);
// console.log(messi.encryptPassword());
// console.log(messi.changeUsername());

//behind the scene

const User = function(userName,email,password){
    this.userName = userName;
    this.password = password
    this.email = email
}

User.prototype.encryptPassword = function(){
    return `${this.password}abcd`
}
User.prototype.changeUsername = function(){
    return `${this.userName.toLowerCase()}`
}

const koushik = new User("KOUSHIK","koushik@mail.go",45621)
console.log(koushik.encryptPassword());
console.log(koushik.changeUsername());