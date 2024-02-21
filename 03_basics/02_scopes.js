//var a = 3000
let b=5000

if (true) {
    var a = 30;
    let b = 50;
    const c = 70;
    // console.log("Inner b "+b);
}
// console.log(a);
// console.log(b);
// console.log(c);

function first()
{
    const user = "Rohan";
    function second() {
        const insideSecond = "I am inside second"
        console.log(user+" "+insideSecond);
    }
   // console.log(insideSecond);
    //second()
}
first()

//hoisting in javascript

console.log(fun1(6))

function fun1(num)
{
    return num+1
}

console.log(holding(10));
const holding = function(num) // varible is declared here we cannot access it before its declaration
{
    return num+2
}

