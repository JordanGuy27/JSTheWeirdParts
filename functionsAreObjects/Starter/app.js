//first class functions -> everything you can do with other types of information you can do with functions
// can attach primmitive data types, other objects, other functions
//functions can be anonymous


function greet() {
    console.log('hey');
}

greet.language = 'english';
//since the function is an object you can attach a property to  it
console.log(greet.language);
console.log(greet);