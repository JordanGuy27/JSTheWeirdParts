function greet(whatToSay) {
    return function(name) {
        console.log(whatToSay + '' + name);
    }
}

//function that returns a function

//able to pass a value for whatToSay and another invocation with a name value

let sayHi = greet('Hey ');
sayHi('Guy');

//even though the greet function completes and is popped off the stack, any function within greet will have access to the memory space of greet
//execution context closes in outer variables
//closures make sure that when you run a function it executes the way it is supposed to


function buildFunctions() {
    
    let arr = [];

    for(let i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        )
    }

    return arr;

}

let fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();
