
//for of loop

const country = ["India","China","USA","Canada"]

for(const count of country)
{
    // console.log(`country names are ${count}`);
}

const greeting = "Hello World"
for (const greet of greeting) {
    // console.log(greet);
}

const map = new Map();
map.set('LM',10);
map.set('CR',7);
map.set('NJR',11);
map.set('AR',44);

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

for(const [key] of map)
{
    // console.log(key);
}
for(const [key,val] of map)
{
    // console.log(`for ${key} jersy number is ${val}`);
}
//Map is itarable by forof loops but objects are not
const MyObj = {
    LM10:"LIONEL MESSI",
    CR7:"CRISTIANO RONALDO"
}

// for(const key of MyObj)
// {
//     // console.log(`${key}`); //not iterable
// }
// for(const [key,val] of MyObj)
// {
//     // console.log(`${key} is Known as ${val}`); //now iterable coz of []
// }

const myLang = {
    js:"JAVASCRIPT",
    cpp:"C++",
    rb:"RUBY",
    perl:"PERL"
}

for (const key in myLang) {
//    console.log(`${key}  ${myLang[key]}`);
}

const myArr = ['a','b','c','d']

for (const key in myArr) {
    // console.log(myArr[key]);
}

for (const [key] in map) {
    console.log(key);
}