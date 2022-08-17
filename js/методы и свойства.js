// Методы и свойства строк и чисел

"use strict";

// Методы - это вспомогательные функции
// Свойства - это вспомогательные значения

// Все можно найти в официальной документации от mozila

const str = "test"; // Покажет длину строки str.length
const arr = [1, 4, 6]; // Покажет длину массива arr.length

console.log(arr.length); // это свойство

console.dir(arr); // Покажет методы и свойства для этого типа данных. В браузере

console.log(arr[2] = 'd'); // Заменится
console.log(arr);

console.log(str[2] = 'd'); // Не заменится. Для этого есть методы
console.log(str);



// Методы изменения регистра toUpperCase/toLowerCase

const str2 = 'test';
console.log(str2.toUpperCase()); // После методов всегда ставим круглы скобки. Этот метод приводит строку в верхний регистр, но не меняет его напрямую

const strBig = str2.toUpperCase(); // Записали строку в верхнем регистре в новую переменную
console.log(strBig);



// Метод поиска подстроки indexOf

let fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); // Должен принимать в себя какой-то аргумент
console.log(fruit.indexOf("q")); // Получим -1, так как такого значения не существует



// Методы изменения строки slice(), substring(), substr()

const logg = "Hello world!";

console.log(logg.slice(6, 11)); // Аргументы пишем сначала от какого, а потом до какого символа строки отрезать, не включая последний символ в строку
console.log(logg.slice(6)); // Строка будет обрезаться до конца, если не указывать второй аргумент
console.log(logg.slice(-5, 0)); // Начинаем обрезать с обратной стороны строки

console.log(logg.substring(6, 11)); // Похож на предудыщий, и не может поддерживать отрицательные значения

console.log(logg.substк(6, 5)); // Указываем длину во втором аргументе


// Числовые методы

// Для просмотра методов чисел существует внутри браузера библиотека Math.

const num = 12.6;
console.log(Math.round(num)); // число округлилось до 12

const test = '12.2px';
console.log(parseInt(test)); // Переводит число в другую систему исчисления. Получим 12 в виде числа
console.log(parseFloat(test)); // Возвращает число с плавающей точкой


// Метод trim() удаляет пробелы