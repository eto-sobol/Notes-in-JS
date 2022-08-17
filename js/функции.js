//Функции

"use strict";

function showFirstMessage(text) { // В круглые скобки передаются аргументы функций, их может быть сколько угодно
    console.log(text); //Функцию нужно использовать, чтобы она заработала. аргументы нужно использовать, если они передаются
    let num = 20;
}

showFirstMessage("Hello world!"); // Обязательно ставим круглые скобки

console.log(num); // Если объявляем переменную внутри функции, то снаружи она уже недоступна. Будет ошибка. Все дело в области видимости 



//  Задача 2

let num1 = 20; // Теперь переменная стала глобальной. Находится в глобальной области видимости

function showFirstMessage1(text) {
    console.log(text);
    num1 = 30; // Функция может использовать глобальную переменную
}

showFirstMessage1("Hello world!");

console.log(num1); // Теперь все работет. Функция изменила переменную



// Задача 3

function calc(a, b) {
    return (a + b); // Функция перкращает действие, когда видит return. Это ключевое слово возвращает значение функции
    console.log("Hello world!"); // Это мертвый код, после return мы ничего не пишем
}

console.log(calc(5, 6));



// Задача 4

function ret() {
    let num = 50;
    return num; // Позволяет вывести внутреннюю переменную наружу
}

const anotherNum = ret();

console.log(anotherNum);

// Функции сузествуют еще до того, как мы их оъявляем, так как компилятор при запуске кода сначала находит функции и создает их



// Function expression 

const logger = function () { // создается только тогда, когда до нее доходит поток кода
    console.log("Hello");
};

logger();



// Стрелочная функция 

const calc2 = (a, b) => {
    return a + b;
};

console.log(calc2(2, 3)); // 5

// Создаем перемменную, в которую помещаем стрелочкую функцию.
// В круглых скобках - аргументы
// Дальше идут инструкции, которые мы помещаем в функцию


// Функции стоит делать УНИВЕРСАЛЬНЫМИ

// const usdCurr = 28;
// const euCurr = 28;

// function convert(amount, curr) { // Более универсальная функция, чем если мы будем жестко привязываться к какому-то значению
//     console.log(curr * amount);
// }

// convert(500, usdCurr); // 14000
// convert(100, euCurr); // 2800


// Про return

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount; // Возвращаем значение функции и останавливаем функцию
}

function promotion(result) {
    console.log(result * discount); // Выводим значение функции promotion. 12600
}

promotion(convert(500, usdCurr)); // Получили значение функции convert и отправили его в функцию promotion.


// Return можно испольховать вообще без значения

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return // Функция полностью остановится, когда увидит ключевое слово return 
    }
    console.log('Done');
}

test();


// Функция ВСЕГДА что-то возвращает. даже если в ней ничего нет. Например:

function doNothing() {} // Вернет undefined
console.log(doNothing() === undefined); // true