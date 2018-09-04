//Primitive Types - set a variable a, if you make a variable b = a, both values will be stored in different locations even though they are the same(reference by value)

var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);
//two separate spaces


//Reference - for objects, if b = a they both point to the same address, separate objects are not created

var c = {greeting: "hi "};

var d;

d = c;
c.greeting = "hola"; //this value is now mutated

console.log(c);
console.log(d);

// primitive types are by value and all objects are by reference
