function b() {
    console.log('Called b!');
}

b();

console.log(a);

var a = 'Hello World!';

console.log(a);

//CONCEPTUAL ASIDE
//single threaded - one command is executed at a time
//synchronous -  one line at a time and in order

//every function creates a new execution context
//when a function finishes execution it is popped off the execution stack