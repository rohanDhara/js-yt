const mySchool= "NBHS"
const place = "Barasat"

//console.log(mySchool+place); try to avoid this type of concatenation

const rightWayOfConcat = (`my school name is ${mySchool.concat(" Rohan")} and placed in ${place}`);
//use this way to concat it helps in doing any operation and also called as string interpolation
//console.log(rightWayOfConcat);

const myCar = new String("Suzuki");
console.log(myCar.charAt(3));
console.log(myCar.indexOf(k));