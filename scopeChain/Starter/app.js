function b() {
	console.log(myVar);
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();

//because function b doesn't have myVar declared in its lexical scope, it looks outside and grabs it from the global scope

//functions inside of other function are created when the parent function is run