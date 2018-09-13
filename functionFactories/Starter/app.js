function makeGreeting(lang) {
    
    return function(firstName, lastName) {

        if (lang === 'en') {
            console.log(`Hello ${firstName} ${lastName}`);
        }

        if (lang === 'es') {
            console.log(`Hola ${firstName} ${lastName}`);
        }
    }
}

let greetEnglish = makeGreeting('en');
//executes makeGreeting with 'en' for language
let greetSpanish = makeGreeting('es');

greetEnglish('Jordan', 'Guy');
greetSpanish('Auston', 'Matthews');