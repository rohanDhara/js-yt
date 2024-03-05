class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`); 
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`a new course added by ${this.username}`);
    }
}

const user1 = new Teacher("Rohan","teacher@mail.co",456)
user1.logMe();
user1.addCourse();

const user2 = new User("kaka")
// user2.addCourse()
user2.logMe();

console.log(user2 === user1); // false
console.log(user1 === Teacher); // false
console.log(user1 instanceof Teacher); //true
console.log(Teacher instanceof User); //false
console.log(user1 instanceof User); //true