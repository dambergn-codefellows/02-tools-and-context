"use strict";

let array = [1, 2, 3, 4];
let doubler = (n) => {return 2 * n};
let result = [];

// forEach
const forEach = (array, cb) => {
    for(let i = 0; i < array.length; i++) {
        let el = array[i]
        cb(el)
    };
};
console.log(forEach(array, doubler));

// Map
const map = (array, cb) => {
    let results = [];
    for (let i = 0; i < array.length; i++) {
        let input = cb(array[i], i, array)
        results.push(input);
    }
    return results;
};
map(array, doubler)
// console.log(map(array, doubler));

//Filter
const filter = (array, cb) => {
    return (array, cb);
};


//Reduce
const reduce = (array, cb) => {
    return (array, cb);
};

module.exports = {};
module.exports.forEach = forEach;
module.exports.map = map;
module.exports.filter = filter;
module.exports.reduce = reduce;