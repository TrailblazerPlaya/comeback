"use strict"
// const flights = ['Russia', 'Mexico', 'Canada', 'Mexico', 'Canada'];
// const setFlights = new Set(flights);
// console.log(setFlights);
// console.log(setFlights.size);
// console.log(setFlights.has('Russia'));
// setFlights.add('Spain');
// console.log(setFlights);
// setFlights.delete('Canada');
// console.log(setFlights);
// //перебираем все элементы массива
// for (const flights of setFlights) {
//     console.log(flights);
// }

// console.log([...setFlights]);//получили уникальное значение из setFlights и добавили его в массив
//уникализировать объекты в массиве с помощью set не получится, так как это не простейшие элементы массива!!

const wetherMap = new Map();
wetherMap
    .set('London', '10')
    .set('Moscow', '5');

console.log(wetherMap.get('London'));
console.log(wetherMap.has('London'));
wetherMap.delete('Moscow');
// wetherMap.clear();

wetherMap
   .set(1, 5)
   .set(true, 'yes')
   .set(true, 'yes!')
   .set(false, 'no')
   .set([1, 2, 3, 4, 5], 'array')
   .set({a: 3}, {a: 3});


console.log(wetherMap);



const wetherMap2 = new Map([
    ['London', '10'],
    ['Moscow', '102'],
]);
console.log(wetherMap2);

const wetherObj = {
    london: '10',
    moscow: '4',
    saratov: '3'
};
console.log(Object.entries(wetherObj));
const wetherMap3 = new Map(Object.entries(wetherObj));
console.log(wetherMap3);