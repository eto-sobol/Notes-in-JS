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

// const copy = obj; // передает не структуру объекта, а ссылку

// copy.a = 10;

// console.log(copy); // { a: 10, b: 1 }
// console.log(obj); // { a: 10, b: 1 } ПОЧЕМУ?

// Когда работа идет с примитивными типами данных типа строк, то они передаются по ЗНАЧЕНИЮ
// Когда работа идет с объектами (массивы, функции и спец.объекты), то передача идет уже не по значению, а по ССЫЛКЕ, поэтому, когда мы модифицируем копию объекта, мы модифицируем на самом деле сам объект, передавая ему значение через копию

// Как тогда создавать копии, которые не будут затрагивать оригинал при изменении?



// 1. Использование циклов

function copy(mainObj) { // При помощи цикла она создаст новый объект, перебирая старые свойства, которые были в старом объекте
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers); // Мы скопировали значения и свойства объекта в новый объект при помощи функции
newNumbers.a = 10; // Изменит только копию
newNumbers.c.x = 10; // Но при этом он изменит внутренний объект и оригинала и копии. Почему?? Потому что мы создали поверхностную копию объекта. Можем работать только со свойствами, которые лежат на верхнем уровне

console.log(newNumbers); // { a: 10, b: 5, c: { x: 7, y: 4 } }
console.log(numbers); // { a: 2, b: 5, c: { x: 7, y: 4 } } Изменения в копии не задели оригинал. Благодаря области видимости?



// 2. Object.assign

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); // { a: 2, b: 5, c: { x: 10, y: 4 }, d: 17, e: 20 } два объекта просто соединились. Эта копия независима (кроме вложенных объектов)
const clone = Object.assign({}, add); // помещаем пустой объект 

clone.d = 20;

console.log(add); // { d: 17, e: 20 } не изменился
console.log(clone); // { d: 20, e: 20 } изменился



// Частные случаи - массивы

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[2] = "привет";
console.log(newArray); // [ 'a', 'b', 'привет' ]
console.log(oldArray); // [ 'a', 'b', 'c' ]



// 4. Использование оператора разворота Spread

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook']; // синтаксис spread оператора 

console.log(internet); // получит массив, который состоит из предыдущих массивов + собственные аргументы


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num); // разбираем массив на значения и передаем их в кач-ве аргументов в функцию 


// Так вот, по поводу копий

const array = ['a', 'b', 'c'];

const newArr = [...array];
newArr[3] = 7;

const q = {
    one: 1,
    two: 2
};

const newQ = {
    ...q
};

newQ.b = 10;

console.log(newArr); // [ 'a', 'b', 'c', 7 ]
console.log(newQ); // { one: 1, two: 2, b: 10 }
console.log(array); // [ 'a', 'b', 'c' ]
console.log(q); // { one: 1, two: 2 }