const cousinArray = ["Rohan","Raja","Rahul","Rony"];
const friendArray = ["Swarnav","Sandipan","Sahil","Ayanendu"];
const newArr=["r","frtyg"];


//cousinArray.push(friendArray);
const combinedArray=cousinArray.concat(friendArray); //by using this method we can only concat two this {...,...} is called spread function
//console.log(cousinArray[4][2]);
//console.log(combinedArray);


const anotherArray = [...cousinArray,...friendArray,...newArr];//most important.By using thhis method we can concat more than one separarted by a comma

const house =  cousinArray.flat();
// console.log(anotherArray);

const firstArr=[5,4,7,[4,6,],[1,2,4,[1,2,3,5]]];

console.log(firstArr.flat(Infinity));
//learn isArray,fro,from etc methods from mdn docs