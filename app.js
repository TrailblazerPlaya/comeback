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

// const wetherMap = new Map();
// wetherMap
//     .set('London', '10')
//     .set('Moscow', '5');

// console.log(wetherMap.get('London'));
// console.log(wetherMap.has('London'));
// wetherMap.delete('Moscow');
// // wetherMap.clear();

// wetherMap
//    .set(1, 5)
//    .set(true, 'yes')
//    .set(true, 'yes!')
//    .set(false, 'no')
//    .set([1, 2, 3, 4, 5], 'array')
//    .set({a: 3}, {a: 3});


// console.log(wetherMap);



// const wetherMap2 = new Map([
//     ['London', '10'],
//     ['Moscow', '102'],
// ]);
// console.log(wetherMap2);

// const wetherObj = {
//     london: '10',
//     moscow: '4',
//     saratov: '3'
// };
// console.log(Object.entries(wetherObj));
// const wetherMap3 = new Map(Object.entries(wetherObj));
// console.log(wetherMap3);



//////////////////////////иттерация мапов
// const weatherMap = new Map([
//     ['London', '10'],
//     ['Moscow', '4'],
//     ['Paris', '42'],
// ]);

// for(const [key, value] of weatherMap) {
//     console.log(key);
//     console.log(value);
// }

// console.log([...weatherMap]);
// console.log([...weatherMap.keys()]);
// console.log([...weatherMap.values()]);
////////////////////////////////////

////меняем местами ключ и значение/////
// let weatherMap = new Map([
//     ['London', 10],
//     ['Moscow', 4],
//     ['Paris', 42],
// ]);
// const newMap = [];
// for (const [key, value] of weatherMap) { 
//      newMap.push([value, key]);//в сола сам догадался
// };    

// console.log(newMap);

// weatherMap = new Map([...weatherMap].map(el => el.reverse()));//ну так да конечно проще, но я не знал
// console.log(weatherMap);

///////////////////////

//WeakMap это когда ключем может быть только объект или массив
// let a = {a: 10};
// const map = new WeakMap();
// map.set(a, 'test');
// console.log(map.get(a));
// console.log(map.has(a));
// console.log(map.delete(a));


// let cache = new WeakMap();

// function getValue(obj) {
//     if(!cache.has(obj)) {
//         const result = 3;
//         cache.set(obj, result);
//     }
//     return cache.get(obj);    
// }
// const result = getValue(a);
// console.log(result);

////////weakSet 
let a = {a: 10};
let b = {b: 20};
const set = new WeakSet([a, b]);

a = null;
setTimeout(() => {
    console.log(set);
} , 2000)
console.log(set.has(a));