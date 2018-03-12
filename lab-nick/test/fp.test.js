"use strict";

const forEach = require("../lib/fp.js").forEach;
const map = require("../lib/fp.js").map;
const filter = require("../lib/fp.js").filter;
const reduce = require("../lib/fp.js").reduce;

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

describe('Reduce Function', () => {
    it('returns an array with only even numbers', () => {
        expect(reduce([1, 2, 3, 4, 5], (a, b) => a + b, 0)).toEqual(15);
    });
});
