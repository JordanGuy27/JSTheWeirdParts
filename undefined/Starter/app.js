var a;
console.log(a);

if (a === undefined) {
    console.log('a is undefined');
} else {
    console.log('a is defined');
}

//never set variables to undefined
//all variables are set in memory once the parser sees the code, in the creation phase of the execution context
