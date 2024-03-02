const promiseOne = new Promise(function(resolve,reject) {
    //do an async task
    //db connections, cryptography , network call
    //promises are created and to be done latter for some cases like db , ccryptography and network call operations
    setTimeout(function()
    {
        console.log("From Async js");
        resolve(); // this function call connects resolve parameter with .then()
    },1000)
})
// whatever work has done in promise returns in then function
//.then() has the connection only with resolve
promiseOne.then(function(){    //this function automatically accepts an argument which is returned from resolve
    console.log("Promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async task 2 consumed")
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function()
    {
        resolve({userName:"Rohans",email:"abc@accdef.com"}); // we can send data to .then() like this
    },1000);
     
})
promiseThree.then(function(user){  // user is accepting the data sent by the resolve function
    console.log(user);
})
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        
    },1000);
})