"use strict";
// Основы ООП, Прототипно-ориентированный язык


// Задача 1: //

const solder = {
    health: 400,
    armor: 100
};

const john = {
    health: 100,
};

john.__proto__ = solder; // Метод уже устраел.

console.log(john.armor);

// Задача 2: //

const solder2 = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello!");
    }
};

const john2 = {
    health: 100,
};

john2.__proto__ = solder2; // Наследует свойства от своего прототипа, но не напрямую. Можем их вызвать по ключу

john2.sayHello(); // "Hello!"

// Задача 3: //

const solder3 = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello!");
    }
};

const john3 = {
    health: 100,
};

Object.setPrototypeOf(john3, solder3); // современный вид

john3.sayHello(); // "Hello!"

// Задача 4: //

const solder4 = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello!");
    }
};

const john4 = Object.create(solder4); // Создаем новый объект john4, который будет прототипно наследоваться от solder4

john4.sayHello(); // "Hello!"