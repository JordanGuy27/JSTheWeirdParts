function mapForEach(arr, fn) {

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };

    return newArr;
}


let arr = [1,2,3];
console.log(arr);

let var2 = mapForEach(arr, function(item) {
    return item * 2;
});

console.log(var2);

let checkPastLimit = function(limiter, item) {
    return item > limiter;
}

let arr4 = mapForEach(arr, checkPastLimit.bind(this, 1)); //parameter on the bind presets the parameter, in this case limiter will be set to 1
console.log(arr4);

