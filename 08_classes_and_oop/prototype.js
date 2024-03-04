// const myName = "Rohan     "
// console.log(myName.length);
// console.log(myName.trim().length);
//console.log(myName.trueLength); // we want all the Strings to give trim length by using true length method so lets inject true length method 

const hero = ["Thor","Iron Man"]

const heroPower = {
    thor : "hammer",
    ironMan : "lightning",

    getThorPower : function(){
        console.log(`power of thor is ${this.thor}`);
    }
}

Object.prototype.rohan = function() {
    console.log("rohan is inside all objects");
}

Array.prototype.rohanAge = function(){
    console.log(`This is rohans age in array`);
}

// heroPower.rohanAge(); // as rohanAge is injected in Array not in Object that's why this line will give error
// hero.rohanAge(); // This will work fine

//Inheritance

const user ={
    userName:"Rohan",
    isLoggedin:false
}

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable:false
}

const otherSupport = {
    assignment : "JS assignment",
    courseCompletion:true,
    __proto__:teacher //now it will have all the properties of teacher 
}
//also we can define proto here like
otherSupport.__proto__ = user // now otherSupport have the properties of user

//modern syntax

Object.setPrototypeOf(otherSupport,teacher)//now it will have all the properties of teacher

const allUsers = "users  "
String.prototype.trueLength = function()
{
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

allUsers.trueLength();
"KOUSHIK   ".trueLength();
"himas".trueLength();
