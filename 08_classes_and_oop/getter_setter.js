class User{
    constructor(email,password)
    {
        this.email = email;
        this.password = password;
    }
    // if we use getR then we have to use setR and setR will always accept one parameter, which is to be set
    get email(){
        return `${this._email.toUpperCase()}`
    }
    set email(e){
        this._email = e;
    }
    get password(){
        return `${this._password}rohan` // we always send password as like this in encryption format, don't directly send password
    }
    set password(p){
        this._password = p;
    }
}

const rohan = new User("r@dhara.com","abc");
console.log(rohan.email);