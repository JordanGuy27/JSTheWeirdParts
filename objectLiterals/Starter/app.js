var Jordan = {
    firstName: "Jordan",
    lastName: "Guy",
    address: {
        street: "400 king st",
        city: "Mississauga"
    }
}; 
//same as new Object();

function greet(person) {
    console.log('hey ' + person.firstName);
}

greet(Jordan);

greet({
    firstName: "Joe", 
    lastName: "Johnson"
});
//can create an object on the fly when calling the function
//when JS sees the curly braces it recognizes the object literal