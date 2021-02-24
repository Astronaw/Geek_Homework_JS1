'use strict';
// 1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту.
// Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32

let tempCel = 100, tempFar;
tempFar = (9/5) * tempCel + 32;
console.log('Температура в градусах Цельсия: ' + tempCel + '\nТемпература в градусах Фаренгейта: ' + tempFar);

// 2. Объявить две переменные: admin и name. Записать в name строку "Василий"
// Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»)

let admin, name;
name = 'Василий';
admin = name;
console.log(admin);

// 3. *Чему будет равно JS-выражение 1000 + "108"
// Поскольку "108" - это строка, то произойдет конкатенация и результат будет 1000108

// 4. *Самостоятельно разобраться с атрибутами тега script (async и defer)
// Скрипты с атрибутом defer дождутся загрузки страницы и начнут выполняться по очереди.
// Скрипт с async начнет выполнение как только загрузится, не дожидаясь загруки страницы и других скриптов.