
const car = ["BMW","Audi","Marcedes","Mclaren","Lamborgini"]

// const getValue=car.forEach( (item) => {
//     //console.log(`${item}`);
//     return item;
// } )                                  forEach functions do not return anything
// console.log(getValue);

const nums = [1,2,3,4,5,6,7,8,9,10]

const getVal=nums.filter( (val) => {val > 5} ) //fliter returns values,here this is implicit return
// const ge
tVal=nums.filter( (val) => {val > 5} ) //this will return an empty object beacuse {} for this block scope we have to give explixit return
console.log(getVal);

// nums.forEach( () )