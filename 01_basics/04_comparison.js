
// console.log(2>3);
// console.log(2==3);
// console.log(2>=3);
// console.log(2<3);
// console.log(2<=3);


// console.log("2" == 2); // auto-type conversion is done for '==' and only value is checked
// console.log(2==2);

//console.log("2" === 2); // '===' cheks the value as well as datatype

console.log(null >0);
console.log(null==0);
console.log(null >=0);
console.log(null<0);
console.log(null<=0);

/*
    == and >,<=,>= this opeartors works differently
    for operators like >,<,<=,>= null converts value to 0
    but for == null doesn't convert its value to 0 
    it can be a problem so prefer not to use like this (null>0) or null==0
*/