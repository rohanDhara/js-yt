
function myName()
{
    console.log("R");
    console.log("o");
    console.log("h");
    console.log("a");
    console.log("n");
}
//yName //this is reference
// console.log(myName()); // this is call

function addMoreTwoNums(num1,num2) //in parameter we doesn't have to write data type
{
    // let result = num1+num2;
    // return result;
}

function addTwoNums(num1,num2) //in parameter we doesn't have to write data type
{
    return num1+num2;
}
const nums=addTwoNums(3,5);
// console.log("Rohan :"+nums);

function userMessage(message = "This is default value when you pass nothing") // but if we pass then it will be overriden
{
    if(message===undefined){
        console.log("Enter value Please")
        return;
    }
    return `${message} Logged In` //string interpolation
}
// console.log(userMessage());

function calculatePrice(val1,val2,...price1) // in method ... is called rest operator 
{
    return price1;
}
// console.log(calculatePrice(200,400,500,100));
// const myData=
// {
//     myName:"Rohan",
//     age:22
// }

// In jS we have to check for types and converted types that's  why typescript is better
function combineFunc(myObject) {
    console.log(`${myObject.myName} is my Name and age is ${myObject.myAge}`)
}

combineFunc({
    myName:"sanju", //we can also pass objects like this
    myAge:45
});

const myArr = [100,200,300,400,500];
function returnMyArr(getArray)
{
    return getArray[2];
}
console.log(returnMyArr(myArr));

console.log(returnMyArr([200,400,600,800]));