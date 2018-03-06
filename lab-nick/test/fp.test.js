"use strict";

const forEach = require("../lib/fp.js").forEach;
const map = require("../lib/fp.js").map;
const filter = require("../lib/fp.js").filter;
const reduce = require("../lib/fp.js").reduce;
const add = require("../lib/fp.js").add;

describe('forEach Function', () => {
    it('returns an array with values doubled', () => {
        expect(forEach([1, 2, 3, 4, 5], num => num * 2)).toEqual([2, 4, 6, 8, 10]);//to equal required for array
    });
});

describe('Map Function', () => {
    it('returns an array with values doubled', () => {
        expect(map([1, 2, 3, 4, 5], num => num * 2)).toEqual([2, 4, 6, 8, 10]);
    });
});

describe('Filter Function', () => {
    it('returns an array with only even numbers', () => {
        expect(filter([1, 2, 3, 4, 5], num => num % 2 === 0)).toEqual([2, 4]);
    });
});

// describe("add funtion", () => {
//     it("adds two numbers", () => {
//         expect (add(3,2)).toBe(5);
//     });
//     it("adds two numbers", () => {
//         expect (add("a",2)).toBe(null);
//     });
// });

// describe("greet function", () => {
//     test("it should return null when input is not a string", () => {
//         let str = 8;
//         let expected = null;
//     })
//     test("it should return string when input is a string", () => {
//         let str = "hello world";
//         let expected = true;
//     })
// })