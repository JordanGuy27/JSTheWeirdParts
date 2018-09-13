function sayHiLater() {

    let greeting = 'Hey!';

    setTimeout(function() {
        console.log(greeting);
    }, 3000);
}

sayHiLater();


function tellMeWhenFinished(callback) {
    let a = 100;
    let b = 200;

    callback();
}

tellMeWhenFinished(function() {
    console.log('Finished!');
})