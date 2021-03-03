'use strict';


/* 1. С помощью цикла вывести все простые числа в промежутке от 0 до 100 */ console.log('задание 1:');

function isSimple(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 0; i <= 100; i++) {
    if (isSimple(i)) console.log(i)
}



/* 2. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины. */ console.log('\nЗадание 2:');

const myCart = [
    ['item23', 100, 15],
    ['item42', 50, 1],
    ['item11', 15, 7],
    ['item10', 250, 3],
    ['item95', 1250, 2]
];

function countCartPrice(cartName) {
    let count = 0;
    for (let i = 0; i < cartName.length; i++) {
        count += cartName[i][1] * cartName[i][2];
    }
    return count;
}

console.log(`Сумма товаров в корзине: ${countCartPrice(myCart)}`);



/* 3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. */ console.log('\nЗадание 3:');

for (let i = 0; i < 10; console.log(i++)) {}



/* 4. *Нарисовать пирамиду с помощью console.log */ console.log('\nЗадание 4:');

for (let i = 0, symbol = ''; i < 20; i++) {
    console.log(symbol += 'x');
}
