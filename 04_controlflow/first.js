

//basic if else and switch case and operators

const userOne = {}

if(Object.keys(userOne).length === 0)
{
    //console.log(`Object is Empty`);
}
//Nullish Coalescing Operator(??) : null undefined
// const score = 5 ?? 10 // 5 
// const score = null ?? undefined //undefined
// const score = null ?? 10 //10
const score = null ?? 10 ?? 20

//ternary operator is different than ??
console.log(score);