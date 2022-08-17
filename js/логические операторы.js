// Логический оператор &&

// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//     console.log('Я сыт'); // Я сыт 
// }


// console.log((hamburger && fries)); // true


// ...

// const hamburger = true;
// const fries = false;

// if (hamburger && fries) {
//     console.log('Я сыт'); // ничего
// }


// console.log((hamburger && fries)); // false


// ...

// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//     console.log('Я сыт'); // ничего
// }


// console.log((hamburger && fries)); // null


// ...

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log((hamburger === 3 && cola === 2 && fries)); // false - запнулся о первое неправдивое значение

// // Операотор && всегда возвращает первое ложное значение или последнее значение в выражении, если все не ложные

// console.log(1 && 0); // 0 первое неправдивое значение
// console.log(1 && 5); // 5
// console.log(null && 5); // null
// console.log(0 && 'gngngnfnf'); // 0


// if (hamburger === 3 && cola && fries) {
//     console.log('Все поели'); // не выполнится
// } else {
//     console.log('Все голодные'); // 'Все голодные'
// }


// Оператор "ИЛИ"

// Как только оператор ИЛИ находит правду, он перестает работать

// const hamburger = 3; // Если тут будет 0, то выполнится альтернативное сообщение
// const fries = 0;
// const cola = 0;

// if (hamburger || cola || fries) {
//     console.log('Все поели'); // 'Все поели'
// } else {
//     console.log('Все голодные'); // не выполнится
// }


let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport); // done


const hamburger = 3; // Если тут будет 0, то выполнится альтернативное сообщение
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) { // Сначала будут работать операторы И по очереди, а потом сработает оператор ИЛИ
    console.log('Все поели'); // 'Все поели'
} else {
    console.log('Все голодные'); // не выполнится
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets); // выведет 2, потому что первое выражение будет false, второе будет true, и он выведет последнее значение выражения со значением true

console.log(!0); // не 0, поэтому true 