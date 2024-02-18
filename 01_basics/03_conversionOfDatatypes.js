let marks="40";

//console.log(marks);
//console.log(typeof marks);

let convertedMarks = Number(marks);
//console.log(typeof convertedMarks);
//console.log(convertedMarks);

let myName= null;
//console.log(typeof myName);
let convertedName = Boolean(myName);
//console.log(typeof convertedName);
//console.log(Number(myName));


//null=>in String or number gives 0
//String to Number conversion gives NaN (Not a Number)
//"" => false
//"Rohan" => true

//******************************** OPERATIONS ********************************

let value = 2;
// console.log(value+value);
// console.log(value*value);
// console.log(value-value);
// console.log(value/value);
// console.log(value%3);
// console.log(value++);

let str1 = "Rohan"
let str2 = "Dhara"
let str3 = str1 + str2;
// console.log(str3);
// console.log("Rupam" + " Islam");

// console.log("2"+1);
// console.log(2+"1");
// console.log("2"+"1");
// console.log(1+"2"+3);
// console.log(1+2+"3");
//console.log("1"+"2"+3);

console.log(2+false); // 3 ; true as a value always gives 1

let counter = 50
counter++;
console.log(++counter);