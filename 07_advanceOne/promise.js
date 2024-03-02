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
        let error = true ;
        if(!error)
        {
            resolve({userid:"Rohan123", password:12345})
        }
        else{
            reject("ERROR: Something went wrong");
        }
    },1000);
})

promiseFour
.then(function(userDetails)
{
    console.log(userDetails);
    return userDetails.userid;
}).then(function(user)
{
    console.log(user);
}).catch(function(error)
{
    console.log(error);
}).finally(() => console.log("Either resolved or rejected."))  // it is a type of default i.e. wheather it will be resolved or rejected finally will be executed
 // this chaining in .then().then is called thenable which is basically chaining

//we can use async await also instead of .then().catch()

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error)
        {
            resolve({userid:"JavaScript", password: "123"});
        }else
        {
            reject("ERROR IN JS: Something went wrong");
        }
    },1000)
});
//async await cannot resolve the problem itself so we have to wrap it inside try catch
async function consumePromiseFive(){
    try {
        const getresponse = await promiseFive;
        console.log(getresponse);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();
 
//fetch() by using async await 

// async function allUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data= await response.json(); //sometime this process also takes time
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// allUsers()

// fetch() by using .then().catch()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => console.log(data))
.catch((error) => console.log(error))