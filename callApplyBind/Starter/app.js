let person = {
    firstName: 'Jordan',
    lastName: 'Guy',
    getFullName: function() {

        let fullName = `${this.firstName} ${this.lastName}`;
        return fullName;
    }
}

let logName = function(lang1, lang2) {
    console.log(`Logged ${this.getFullName()}`);
    console.log(`Arguments ${lang1} ${lang2}`);
    console.log(`-------------`);
}

{/*let logName = function (lang1, lang2) {
    console.log(`Logged ${this.getFullName()}`);
}.bind(person);
*/} 
//the above is also valid and binds the person object on the fly

let logPersonName = logName.bind(person);
//bind method returns new function and binds the person object to 'this'

logPersonName('en');

logName.call(person, 'es', 'en'); //calls the function and allows you to select the 'this' keyword
logName.apply(person, ['en', 'es']); //works the exact same except it needs an array of variables


//FUNCTION BORROWING

let person2 = {
    firstName: 'John',
    lastName: 'Tavares'
}

console.log(person.getFullName.apply(person2));

//FUNCTION CURRYING -> creating a copy of a function but with preset parameters

function multiply(a, b) {
    return a * b;
}

let multiplyByTwo = multiply.bind(this, 2); //makes a copy of multiply, makes the 2 a permanent parameter for the a argument on this function

console.log(multiplyByTwo(10));