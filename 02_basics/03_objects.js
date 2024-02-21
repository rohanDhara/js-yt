//we can create object of two types 1.literals 2.singleton
//singleton objects are related with constructors
//singleton
//Object.create (constructor method to create objects)

//literals in objects data are stored in a key value format
const mySm=Symbol("Key1");
const myData =
{
    name:"rohan",
    age:22,
    "full Name":"Rohan Dhara",
    isGraduate:false,
    [mySm]:"key2",//specified that it is a symbol by []
    location:"Madhyamgram",
    email:"rohan@mail.go",
    holdings:["land","house"]   
}
// console.log(myData);
// console.log(myData.age);
// console.log(myData["location"]); //we can also access data like this from an object
// console.log(myData[mySm]);//access symbol like this
// console.log(typeof myData[mySm]); 

myData.email="goo@bool.com"
// console.log(myData.email);
//Object.freeze(myData); //freeze made the values freeze we cannot modify it

myData.email="@microsoft.com"
// console.log(myData.email);

myData.greetings = function()
{
    //console.log("Hello from Rohan");
}

// console.log(myData.greetings());
myData.greetingsTwo = function()
{
    console.log(`hello from ${this.email}`); //String interpolation
}
//console.log(myData.greetingsTwo());