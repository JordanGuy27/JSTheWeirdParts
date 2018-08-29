// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    console.log(ms)
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');   
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');

//event queue doesn't execute until the execution stack is finished
//async events refer more to things happening outside the JS engine, like click events or HTTP requests