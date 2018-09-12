//function statement
function greet(name) {
    console.log('Hello ' + name);
}

greet();


//function expression
let greetFunc = function(name) {
    console.log('Hello ' + name);
}

greetFunc();

//immediately invoked function, runs immediately after it is created
let greeting = function(name) {
    return 'Hey ' + name;
}('Jordan');

// (function(name) {

//}()); creating a function and running it at the same time