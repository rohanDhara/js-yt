// IIFE -> Immediately Invoked Function Expressions

(function one(){
    console.log(`DB CONNECTED`);
}) ();

// we have to write ; before start writing another IIFE
//() => {}
((name) => {
    console.log(`DB CONNECTED FOR SECOND TIME FOR ${name}`);
})("Rohan")
//() => ()


