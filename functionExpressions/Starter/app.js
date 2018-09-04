//expression -> unit it code that results in a value. EX 1+2 returns 3, a = 3 returns a set to 3

var a;

//state does work, expression results in a value
if (a === 3) {

} 

//statement
function greet() {
    console.log("hey");
}

//expression, function expressions are not hoisted
var woo = function() {
    console.log("woo");
}

function log(a) {
    console.log(a);
    a();
}

//can pass the function as a parameter
log(function() {
    console.log("hey");
})