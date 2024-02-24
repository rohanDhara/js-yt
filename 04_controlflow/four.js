
const car = ["BMW","Audi","Marcedes","Mclaren","Lamborgini"]

// const getValue=car.forEach( (item) => {
//     //console.log(`${item}`);
//     return item;
// } )                                  forEach functions do not return anything
// console.log(getValue);

const nums = [1,2,3,4,5,6,7,8,9,10]

const getVal=nums.filter( (val) => {val > 5} ) //fliter returns values,here this is implicit return
// const getVal=nums.filter( (val) => {val > 5} ) //this will return an empty object beacuse {} for this block scope we have to give explixit return
// console.log(getVal);

const newNums = [];

nums.forEach( (item) => {
    if(item>5)
        newNums.push(item);
} )

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let updatedBooks = books.filter( (bk) =>  bk.genre==='History');
updatedBooks = books.filter( (bk) => {return bk.publish>=1995 && bk.genre === "Science"} )

// console.log(updatedBooks);
//map() overview

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const result=myNums.map( (num) => num * 10 );
// console.log(result);

//chaining

const result = myNums
                    .map( (num) => {return num * 10} )
                    .map( (num) => num + 1 )
                    .filter( (num) => {return num > 50 } )
// console.log(result);

const total=myNums.reduce( function(acc,num) 
{
    return acc+num;
},0 )

const anotherTotal = myNums.reduce( (acc,nums) => (acc+nums),0 )

// console.log(anotherTotal);

const customerCart = [
    {
        itemName : "item1",
        price : 2500
    },
    {
        itemName : "item2",
        price : 2000
    },
    {
        itemName : "item3",
        price : 2200
    }
]

const amountToBePayed=customerCart.reduce( (acc,item) => (acc+item.price),0 );

console.log(amountToBePayed);
