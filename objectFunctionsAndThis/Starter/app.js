function a() {
    console.log(this);
}

var b = function() {
    console.log(this);
}

a(); 
b();
//both show the window

var c = {
    name: 'The c object',
    log: function() {
        var that = this;

        that.name = 'Updated c object';
        console.log(that);

        var setName = function(newName) {
            that.name = newName;
        }

        setName('update c object again');
        console.log(that);
    }
}


//method on the object, this becomes the object, internal functions point to the global scope, so we set this to a variable within the object so we don't mutate the global window

c.log();