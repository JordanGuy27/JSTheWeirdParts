var objectLiteral = {
    firstName: 'Jordan',
    isAProgrammer: true
}


console.log(JSON.stringify( objectLiteral));

//JSON places property values inside of quotes 
//makes it easy to send and retrieve information from servers
//you can also take a JSON string and use JSON.parse and store the object in a JS variable