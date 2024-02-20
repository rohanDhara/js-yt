//Declaration, definition and accessing of array

const myArr = [0,11,12,31,41,13];
const cars = [14, true,"Bmw"]; //we can store different datatypes in same array
// console.log(cars);
// console.log(myArr[4]);
//console.log(typeof myArr);
const myArr2 = new Array(1,2,3,4);
// console.log(myArr2);

//functions of Array

const myHero=new Array(12,32,45,41,15,22);
// console.log(myHero);
myHero.push(42);
// console.log(myHero);
myHero.pop()
// console.log(myHero);
//try shift unshift operation on your own
const afterSlice = myHero.slice(1,3);
console.log(afterSlice);//slice function doesn't affect the orginal array
console.log(myHero);
myHero.splice(1,3);//splice function takes out the splice from the origianl array and it affects the origianl array
console.log(myHero);

//read mdn docs for more information