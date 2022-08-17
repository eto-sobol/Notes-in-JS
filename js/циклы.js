// 'use strict';

let num = 50;

// while (num < 55) {
//     console.log(num); // 50, 51, 52, 53, 54
//     num++;
// }

// do {
//     console.log(num); // 50, 51, 52, 53, 54
//     num++;
// } while (num < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(num); // 50 51 52 53 54 55 56
//     num++;
// }

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i); // 1 2 3 4 5
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i); // 1 2 3 4 5 7 8 9 пропустил шаг, который нам не нужен
}


// Циклы в цикле

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);

    }
}


// Есть ограничения на вложенность, связанные с памятью

let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n'; // перенос строки 
}

console.log(result);

// *
// **
// ***
// ****
// *****
// ******


first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) continue first; // остановит этот вложенный цикл с K и продолжит первый цикл 
            console.log(`Third level: ${k}`);
        }
    }
}

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) break first; // остановит полностью
            console.log(`Third level: ${k}`);
        }
    }
}