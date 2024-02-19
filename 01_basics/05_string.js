const mySchool= "NBHS"
const place = "Barasat"

//console.log(mySchool+place); try to avoid this type of concatenation

const rightWayOfConcat = (`my school name is ${mySchool.concat(" Rohan")} and placed in ${place}`);
//use this way to concat it helps in doing any operation and also called as string interpolation
//console.log(rightWayOfConcat);

const myCar = new String("Suzuki%kasami%algo");
// console.log(myCar.charAt(3));

// console.log(myCar.includes('p'));//it gives wheather given char is there or not returns boolean value
// console.log(myCar.indexOf('u',3));

let url = "http://google.com/query-is?-frontend-good"
//console.log(url.replace('-','@'));

const firstVar = "   Rohan    ";
// console.log(firstVar);
// console.log(firstVar.trim()); //this method removes all spaces from both sides

console.log(myCar.split('%',2));
console.log(myCar.substring(0,9)); // if we give negetive values it starts from 0th 

console.log(myCar.slice(-8,-3)); // this function can also work with negetive values 

console.log(myCar.length);

// Explore strings at mdn docs 
//EcmaScript => tc39.es