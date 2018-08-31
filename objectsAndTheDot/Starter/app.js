var person = new Object();

person["firstName"] = 'tony';
person["lastname"] = 'wilson';

var firstNameProperty = "firstname"

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstName);

person.address = new Object();
person.address.street = "200 bay st.";
person.address.city = "Toronto";
