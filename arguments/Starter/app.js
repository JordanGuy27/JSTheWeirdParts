//...other will take any additional parameters and add them to the array like object

function greet(firstName, lastName, lang, ...other) {
    console.log(firstName);
    console.log(lasstName);
    console.log(lang);
    console.log(arguments); //contains list of all parameters
}

greet();
greet('jordan');
greet('jordan', 'guy');
greet('jordan', 'guy', 'eng');
//don't need to pass all parameters