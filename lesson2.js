'use strict';

/* 1. Почему код даёт именно такие результаты?

var a = 1, b = 1, c, d;

c = ++a; alert(c);           // a += 1 => a=1+1=2 => c=a=2     | a=2, c=2
d = b++; alert(d);           // d=b=1 => b += 1 => b=1+1=2     | d=1, b=2
c = (2+ ++a); alert(c);      // a += 1 => a=2+1=3 => c=2+3=5   | a=3, c=5
d = (2+ b++); alert(d);      // d=2+b=4 => b += 1 => b=2+1=3   | d=4, b=3
alert(a);                    // 3
alert(b);                    // 3

--------------------------------------------------------------------------------*/

/* 2. Чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *= 2); // a *= 2 => a = a * 2 => a=2*2=4  | x = 1 + 4 = 5

--------------------------------------------------------------------------------*/

/*3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.*/

console.log('Задание 3:');

let a = Math.floor(Math.random() * 200 - 100);
let b = Math.floor(Math.random() * 200 - 100);
let result;

if (a >= 0 && b >= 0) {
    result = a - b;
    console.log('a = ' + a + ', b = ' + b + ', a - b = ' + result);
} else if (a < 0 && b < 0) {
    result = a * b;
    console.log('a = ' + a + ', b = ' + b + ', a * b = ' + result);
} else {
    result = a + b;
    console.log('a = ' + a + ', b = ' + b + ', a + b = ' + result);
}




/* 4. Присвоить переменной а значение в промежутке [0..15].
С помощью оператора switch организовать вывод чисел от a до 15 */

console.log('\nЗадание 4:');

a = Math.floor(Math.random() * 16);
console.log('a = ' + a);

// Отладчик ругался на отсутствие 'break'. Гугл подсказал, что можно использовать коммент '// fall through'

switch (a) {
    case 0:
        console.log(a);
        ++a; //fall through
    case 1:
        console.log(a);
        ++a; //fall through
    case 2:
        console.log(a);
        ++a; //fall through
    case 3:
        console.log(a);
        ++a; //fall through
    case 4:
        console.log(a);
        ++a; //fall through
    case 5:
        console.log(a);
        ++a; //fall through
    case 6:
        console.log(a);
        ++a; //fall through
    case 7:
        console.log(a);
        ++a; //fall through
    case 8:
        console.log(a);
        ++a; //fall through
    case 9:
        console.log(a);
        ++a; //fall through
    case 10:
        console.log(a);
        ++a; //fall through
    case 11:
        console.log(a);
        ++a; //fall through
    case 12:
        console.log(a);
        ++a; //fall through
    case 13:
        console.log(a);
        ++a; //fall through
    case 14:
        console.log(a);
        ++a; //fall through
    case 15:
        console.log(a);
        ++a;
}




// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.

const plus = function (arg1, arg2) {
    return arg1 + arg2;
}

const minus = function (arg1, arg2) {
    return arg1 - arg2;
}

const multiply = function (arg1, arg2) {
    return arg1 * arg2;
}

const divide = function (arg1, arg2) {
    return arg1 / arg2;
}




/* 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation)
В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из п5)
Вернуть полученное значение (использовать switch). */
console.log('\nЗадание 6:')

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case plus:
            return plus(arg1, arg2);
        case minus:
            return minus(arg1, arg2);
        case multiply:
            return multiply(arg1, arg2);
        case divide:
            return divide(arg1, arg2);
        default:
            return 'Неправильные вводные данные';
    }
}

console.log(mathOperation(7,2, plus));
console.log(mathOperation(17,7, minus));
console.log(mathOperation(23, 11, multiply));
console.log(mathOperation(121,11, divide));