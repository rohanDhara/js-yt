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
    [mySm]:"key2",//specified that it is a symbol
    location:"Madhyamgram",
    email:"rohan@mail.go",
    holdings:["land","house"]   
}
// console.log(myData);
// console.log(myData.age);
// console.log(myData["location"]); //we can also access data like this 
// console.log(myData[mySm]);//access symbol like this
// console.log(typeof myData[mySm]); 

myData.email="goo@bool.com"
// console.log(myData.email);
//Object.freeze(myData); //freeze made the values freeze we cannot modify it

myData.email="@microsoft.com"
// console.log(myData.email);

myData.greetings = function greeting()
{
    console.log("Hello from Rohan");
}
myData.greetingsTwo = function greetingTwo()
{
    console.log(`hello from ${myData.name}`); //Error in here fix it before go to next video
}