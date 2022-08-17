"use strict";

// Объекты


// Объекты - это ассоциативные массивы

// Получить свойство объекта можно через ключ: через точку или квадратные скобки

const obj = new Object(); // устаревший способ объявления объекта

const options = {
    name: "test", // Ключ: значение
    width: 1024,
    height: 1024,
    colors: { // Может содержать в себе объекты
        border: "black",
        bg: "red"
    },
    makeTest: function () { // Создаем метод объекта
        console.log(options.name); // test
    }
};

options.makeTest(); // Запускаем метод объекта

delete options.width; // удалит свойство
console.log(options.width); // undefined. Свойство  было удалено



// Деструктуризация объекта

const {
    border,
    bg
} = options.colors; // Вытащили свойства, которые находятся в объекте в качестве отдельной переменной

console.log(bg); // red



//Удаление значения объекта

console.log(options.name);

delete options.name; // Удаляем значение объекта

console.log(options);




// Перебрать свойства объекта for (... in ...);

for (let key in options) { // задали переменную key в которую будем помещать ключ
    if (typeof (options[key]) === "object") {
        for (let i in options[key]) { // получаем значение ключа и помещаем в i
            console.log(`Свойство ${i} со значением ${options[key][i]}`); // Обращаемся к свойству внутри объекта
        }
    } else {
        console.log(`Свойство ${key} со значением ${options[key]}`); // Если ключ не будет объектом, выводим все как обычно
    }
}


// Узнать количество свойств внутри объекта 

// Перебрать свойства внутри при помощи for (in), и сделать счетчик для каждого повторения цикла

let counter = 0; // счетчик

for (let key in options) {
    if (typeof (options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`Свойство ${i} со значением ${options[key][i]}`); // Обращаемся к свойству внутри объекта
            counter++;
        }
    } else {
        console.log(`Свойство ${key} со значением ${options[key]}`); // Если ключ не будет объектом, выводим все как обычно
        counter++;
    }

}

console.log(counter);



// Считаем количество свойств объекта через массив и ключи объекта

console.log(Object.keys(options)); // Метод берет объект и создает массив состоящий из ключей

console.log(Object.keys(options).length); // Вычисляет длину этого массива 