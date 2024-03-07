//getter setter in function based
function User(email,password){

    this._email=email;
    this._password = password;

    Object.defineProperty(this,"email",{
        get:function(){
            return `${this._email.toUpperCase()}`
        },
        set:function(e){
            this.email=e;
        }
    })

    Object.defineProperty(this,"password",{
        get:function(){
            return `${this._password.toUpperCase()}`
        },
        set:function(p){
            this.password = p
        }
    })
}

const user1 = new User("india@golang.co","uday")
console.log(user1.email);
console.log(user1.password);

