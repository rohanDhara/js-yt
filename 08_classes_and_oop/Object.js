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

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/