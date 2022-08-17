// Callback-функции

"use strict";

function first() {
    // do something
    setTimeout(function () {
        console.log(1);
    }, 500); // Задержка в 500 м-сек
}

function second() {
    console.log(2);
}

first();
second(); // 2 появится раньше 1 из-за задержки

function learnJS(lang, callback) { // Шаблон callback-функции. В одну функцию мы передаем другую функцию в качестве второго аргумента
    console.log(`Я учу: ${lang}`);
    callback(); // Вызываем функцию
}

function done() {
    console.log("Done");
}

learnJS("JavaScript", function () { // Сначала выполнится функция внутри функции, в которую мы передаем аргументы, а потом функция-аргумент
    console.log("Hello world!");
});

learnJS("JavaScript", done); // Передаем функцию как аргумент. Без круглых скобок (то есть мы ее не вызываем)