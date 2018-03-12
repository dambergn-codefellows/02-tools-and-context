'use strict';

// forEach
function forEach(array, cb) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let input = cb(array[i]);
        result.push(input);
    };
    return result;
};
// console.log(forEach([1, 2, 3, 4, 5], num => num * 2));  //[2, 4, 6, 8, 10]

// Map
function map(array, cb) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let input = cb(array[i], i, array);
        result.push(input);
    };
    return result;
};
// console.log(map([1, 2, 3, 4, 5], num => num * 2));  //[2, 4, 6, 8, 10]

//Filter
function filter (array, cb) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let input = array[i]
        if (cb(array[i])) {
            result.push(input);
        };
    };
    return result;
};
// console.log(filter([1, 2, 3, 4, 5], num => num % 2 === 0)); //[2, 4]

//add
function add (valA, valB) {
    if (Number.isInteger(valA + valB)) {
        return (valA + valB);
      };
      return null;
};

//Reduce
function reduce (array, cb, start) {
    let result = start;
    for (let i = 0; i < array.length; i++) {
        result = cb(result, array[i]);
    }
    return result;
};
// console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b, 0)); //[15]




module.exports = {};
module.exports.forEach = forEach;
module.exports.map = map;
module.exports.filter = filter;
module.exports.reduce = reduce;
module.exports.add = add;