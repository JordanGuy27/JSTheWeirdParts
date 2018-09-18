// all objects have a prototype property
//JS searches prototype chain for objects and properties

let person = {
    firstName: "default",
    lastName: "default",
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

let jordan = {
    firstName: "Jordan",
    lastName: "Guy"
}

//NEVER DO THIS
jordan.__proto__ = person;
//jordan now has accessibility to the getFullName function

let joe = {
    firstName: "Joe"
}

joe.__proto__ = person;
console.log(joe.getFullName()); //Joe does not have a lastName property but the function is called on Joe, goes down the prototype chain to person and sets it                                 //to 'default'
console.log(joe.firstName);

//prototype chain refers to a tree in which the JS engine will continue to look down the scope of prototypes in order to find a value

//all objects, functions and arrays have prototypes pointing to their respected methods
//bottom of the prototype chain is always an object