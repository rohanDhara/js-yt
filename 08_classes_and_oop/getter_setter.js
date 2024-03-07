class User{
    constructor(email,password)
    {
        this.email = email;
        this.password = password;
    }

    get password(){
        return this.password.toUpperCase();
    }
    set password(p){
        
    }
}

const rohan = new User("r@dhara.com","123");
console.log(rohan.password);