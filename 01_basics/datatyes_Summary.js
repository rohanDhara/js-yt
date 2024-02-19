

/*
    how the data is stored in memory and how to access those data, based on that two types of data are there
    1.Primitive(It is call by value i.e we get a copy of that value not the original one)
    2.Non-Prmitive(object/object function)


There are Seven ****Primitive**** data-types 
   1.Number
   2.String
   3.Boolean
   4.Object
   5.undefined
   6.symbol
   7.bigint
*/

const name="Rohan"
const age = 22
const isGraduate = false
const hasAJob = null;
let about;
const isBigInt=457896521452345789652n
console.log(typeof isBigInt);


/* 
    Non-Primitive Data types
    1.Array
    2.Object
    3.function
*/
const car = ["BMW","Marcedes","Audi","Mclaren"];
//console.log(typeof car);
let myObj= {
    name:"Rohan",
    roll:133,
    depratment:null    
}
//console.log(myObj);

const thisIsMyFunction=function myFunction()
{
    console.log(9+1);
}
console.log(typeof thisIsMyFunction); //function returns object function type.