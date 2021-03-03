// 'use strict'

// Задание 1:

function numToString(number) {
    const obj = {};
    if (number < 0 || number > 999) {
        console.log('Число должно быть от 0 до 999');
        return obj;
    }
    obj.сотни = Math.trunc(number / 100);
    obj.десятки = Math.trunc((number % 100) / 10);
    obj.единицы = number % 10;
    return obj;
}

console.log(numToString(4567));
console.log(numToString(692));
console.log(numToString(33));
console.log(numToString(7));




// Задание 2 - вариант 1:

const cart = {
    total() {
        let sum = 0;
        for (let item in this) {
            if (!this[item].hasOwnProperty('price' && 'number')) continue;
            sum += this[item].price * this[item].number;
        }
        return sum;
    }
};

cart.item1 = {
    name: 'хлеб',
    price: 30,
    number: 3
}

cart.item2 = {
    name: 'посох мага',
    price: 300,
    number: 1
}

cart.item3 = {
    name: 'ядерная боеголовка',
    price: 89500,
    number: 2
}

console.log(cart.total());


// Задание 2 - вариант 2:

const cart2 = [];

cart2[0] = item1 = {
    name: 'хлеб',
    price: 30,
    number: 3
}

cart2[1] = item2 = {
    name: 'посох мага',
    price: 300,
    number: 1
}

cart2[2] = item3 = {
    name: 'ядерная боеголовка',
    price: 89500,
    number: 2
}

function countCartPrice(cartName) {
    let count = 0;
    for (let i = 0; i < cartName.length; i++) {
        count += cartName[i].price * cartName[i].number;
    }
    return count;
}

console.log(countCartPrice(cart2))
