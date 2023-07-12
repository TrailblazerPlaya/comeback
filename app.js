"use strict"
const flights = ['Russia', 'Mexico', 'Canada', 'Mexico', 'Canada'];
const setFlights = new Set(flights);
console.log(setFlights);
console.log(setFlights.size);
console.log(setFlights.has('Russia'));
setFlights.add('Spain');
console.log(setFlights);
setFlights.delete('Canada');
console.log(setFlights);
//перебираем все элементы массива
for (const flights of setFlights) {
    console.log(flights);
}

console.log([...setFlights]);//получили уникальное значение из setFlights и добавили его в массив
//уникализировать объекты в массиве с помощью set не получится, так как это не простейшие элементы массива!!