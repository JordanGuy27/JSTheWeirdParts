var greet = 'Hello!';
var greet = 'Hola!'; 

console.log(greet);
//namespace - container for variables and functions

var english = {
    greeting : {
        general: 'hey'
    }
};
var spanish = {};

//can declare objects to contain the variables so they do not collide with each other

spanish.greet = 'hola';

console.log(spanish);
console.log(english.greeting.general);