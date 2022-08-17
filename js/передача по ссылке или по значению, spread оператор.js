'use strict';

let a = 5,
    b = a;

b = b + 5;

console.log(b); // 10
console.log(a); // 5

const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;