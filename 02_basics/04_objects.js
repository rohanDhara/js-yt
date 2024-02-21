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
console.log(obj3);
