//here w'll see how to access objects as singleton

const firstUser=Object.create({}); //it will also create an Object a singleton
// console.log(firstUser);
const secondUser = new Object(); //another type for creating object a singleton
// console.log(secondUser);
const userTwo = {} //Non-singleton Object
userTwo.name="Roahn";
userTwo.isLoggedIn = false;

// console.log(userTwo);
const userOne = {     
    email:"abc@google.com",
    phone:7439731476,
    address:
    {
        parmanentAddress:
        {
            street:"tunte para",
            vill:"east udayrajpur"
        }
    }

}; 
// console.log(userOne.address.parmanentAddress?.street); // ? is it there , for use in API call
// console.log(userOne); 
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

let obj3 = {obj1,obj2}; // it creates objects inside an object
// obj3 = Object.assign({},obj1,obj2); //assings all the object values to the first object in parameter
obj3={...obj1,...obj2};
// console.log(obj3);


 const users = 
 [
    {
        name:"Rohan"
    },
    {
        ages:45
    },
    {
        status:"login"
    }
]
//  console.log(users[0].name);

// console.log(Object.keys(obj2));
// console.log(Object.values(obj2));
// console.log(Object.entries(obj2)); //retuens objetcs inside and array

// console.log(obj1.hasOwnProperty("1"));

//object de-structure and JSON API

const college = {
    collegeName:"GNIT",
    address:"Sodepur",
    contact:33-9854-65412
}

college.collegeName;//we will access like that but 

const {collegeName: name} = college  //object de-structuring
console.log(name);