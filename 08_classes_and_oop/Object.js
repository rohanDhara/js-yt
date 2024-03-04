function addOne(number){
    return number+1;
}
// EveryThing in js is basically object they are inheriting property from their parent class 
// it goes up to its prototypes untill it gets null 
addOne.power = 3 
// console.log(addOne(12));
// console.log(addOne.power);
// console.log(addOne.prototype)
 //in js functions behaves like normal functions but we can use it like object as it is inheriting from object class 

const book = function(bookName,price)
{
    this.bookName = bookName;
    this.price = price;
}

book.prototype.increment = function()
{
    this.price++
}

book.prototype.printDetails= function()
{
    console.log(`name : ${this.bookName} and price ${this.price}`);
}

const book1 = new book("JAVA",1200)
const book2 = new book("C",850)

book2.printDetails()