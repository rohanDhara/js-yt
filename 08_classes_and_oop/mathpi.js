//Advance Object Concepts
//console.log(Math.PI);
Math.PI = 5 //cannot change the value of PI like this as it is a constant
//console.log(Math.PI); 

console.log(Object.getOwnPropertyDescriptor(Math,"PI")); //it will give hidden property of PI from Math

const area = {
    name:"Tunte Para",
    pincode:700125,
    inIndia: true,

    makingRoad:function(){
        console.log("Road is not making");
    }
}
//console.log(Object.getOwnPropertyDescriptor(area,"name"));

Object.defineProperty(area,"name",{
    writable:false,
    enumerable:false, //by setting false we cannot iterate through name value and also couldn't get it

})

//console.log(Object.getOwnPropertyDescriptor(area,"name"));

for (const [key,value] of Object.entries(area)) {
    if(typeof value != 'function'){ //if we don't check it the code will be crashed. You can try removing if part to see the changes
        console.log(`${key} : ${value}`);
    }
}

console.log(Object.getOwnPropertyDescriptor(Math,"PI"));

Object.defineProperty(Math,"PI",{
    writable:true,
    enumerable:true
})
//so we cannot define properties of PI as once it already defined
console.log(Object.getOwnPropertyDescriptor(Math,"PI"));

