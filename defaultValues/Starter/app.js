function greet(name) {
    name = name || 'your name here';
    console.log('hello ' + name);
}

greet('Jordan');
greet();

//with the or operator the first value that is coerced to true will be shown, example 'Jordan' in the name variable is true so it is printed, with no name , your name here is printed since name = null


//FRAMEWORK ASIDE
//JS files are generally run as 1 even if multiple files are linked. Many new frameworks use a compiler and a min version of the source code to compress all the JS into one file