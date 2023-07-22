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
// let a = {a: 10};
// let b = {b: 20};
// const set = new WeakSet([a, b]);

// a = null;
// setTimeout(() => {
//     console.log(set);
// } , 2000)
// console.log(set.has(a));

///Упражнения на написание рандомайзера
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   var randomNumber = getRandomNumber(1, 100);
//   console.log(randomNumber); // Выводит случайное число между 1 и 100, включая 1 и 100

//интернационализация чисел

// const options = {
//     style: 'currency',
//     currency: 'RUB'
// };
// const options2 = {
//     style: 'currency',
//     currency: 'USD'
// };


// console.log(new Intl.NumberFormat('ru-RU', options).format(23000));
// console.log(new Intl.NumberFormat('en-US', options2).format(22210));


// function convertCurrency(amount, exchangeRate, targetCurrency) {
//     const formatter = new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: targetCurrency,
//     });
//     const convertedAmount = amount * exchangeRate;
//     return formatter.format(convertedAmount);
//   }
  
//   const usdToRubRate = 73.5; // курс обмена доллара на рубль
//   const amountInUSD = 100; // сумма в долларах
//   const convertedAmount = convertCurrency(amountInUSD, usdToRubRate, 'RUB');
//   console.log(convertedAmount); // Выводит эквивалентную сумму в рублях в формате "₽100.00"


// function convert (sum, initialCurrency, convertCurrency) {
//     const allCurrencies = [
//         { name: 'USD', mult: 1 },
//         { name: 'RUB', mult: 1/60 },
//         { name: 'EUR', mult: 1.1 },
//     ];
//     const initial = allCurrencies.find(c => c.name === initialCurrency);
//     if (!initial) {
//         return null;
//     }
//     const convert = allCurrencies.find(c => c.name === convertCurrency);
//     if(!convert) {
//         return null;
//     }
//     return new Intl.NumberFormat('ru-RU', {style: 'currency', currency: convert .name,}).format(sum * initial.mult / convert.mult);   
// };

// console.log(convert(1002, 'USD', 'RUB'));

////DATA
// const now1 = new Date(2024, 10, 15);
// const now2 = new Date(2025, 11, 15);
// console.log(Number(now1));
// console.log(Number(now2));
// console.log(now2 - now1);

// function getDaysBetweenDates(date1, date2) {
//     return (now2 - now1) / (1000 * 60 * 60 * 24);
// };

// console.log(getDaysBetweenDates(now2 - now1));  


// const first = new Date(2024, 10, 15);
// const second = new Date(2024, 10, 15);

// console.log(first < second);
// console.log(first === second);//чтобы это работало нужно использовать конвертацию getTime

// console.log(first.getTime() === second.getTime());


// const user = {
//     name: 'Aleksandr',
//     birthday: '07/14/2023'
// }

// function isBirthdayToday(user) {
//     const today = new Date();
//     const birthday = new Date(user.birthday);
//     return (today.getFullYear() === birthday.getFullYear() && today.getMonth() === birthday.getMonth() && today.getDate() === birthday.getDate());
// }
// console.log(isBirthdayToday(user));

//Timer готовность пиццы 

// function timerPizza(time) {
//     let seconds = time * 60; // преобразуем минуты в секунды

//     const interval = setInterval(() => {
//         seconds--;

//     if (seconds > 0) {  
//         console.log(`Осталось ${seconds} секунд`);
//     } else {
//         console.log('Пицца завершена');
//         clearInterval(interval);
//     }
//  }, 1000); // обновляем каждую секунду             
// }

// timerPizza(1);//вызов функции в минутах

//есть еще способ с использованием даты и ивент лупов, но там нужно компенсировать лаг ивентлупов добавляя 100мс
// function pizzaTimer(ms) {
//     const end = new Date().getTime() + ms;
//     const interval = setInterval(() => {
//         console.log(
//             new Intl.DateTimeFormat('ru-RU', {
//                 minute: 'numeric',
//                 second: 'numeric',
//             }).format(end - new Date().getTime())
//         );
//     }, 1000);
//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('Пицца завершена');
//     }, ms);    
// }

// pizzaTimer(5000);



// function pizzaTimer(ms) {
//     const end = new Date().getTime() + ms;
//     const interval = setInterval(() => {
//       console.log(
//         new Intl.DateTimeFormat('ru-RU', {
//           minute: 'numeric',
//           second: 'numeric',
//         }).format(end - new Date())
//       );
//     }, 1000);
//     setTimeout(() => {
//       clearInterval(interval);
//       console.log('Пицца готова!');
//     }, ms);
//   }
  
//   pizzaTimer(5000);

//ООП 

// function Cart() {
//     this.products = [];
//   }
  
//   Cart.prototype.addProduct = function(product) {
//     this.products.push(product);
//   };
  
//   Cart.prototype.increaseCount = function(productId, count) {
//     const product = this.products.find(p => p.id === productId);
//     if (product) {
//       product.count += count;
//     }
//   };
  
//   Cart.prototype.decreaseCount = function(productId, count) {
//     const productIndex = this.products.findIndex(p => p.id === productId);
//     if (productIndex !== -1) {
//       const product = this.products[productIndex];
//       product.count -= count;
//       if (product.count <= 0) {
//         this.products.splice(productIndex, 1);
//       }
//     }
//   };
  
//   // Пример использования
//   const product = { id: 1, name: 'Bread', count: 1 };
//   const cart = new Cart();
//   cart.addProduct(product);
//   console.log(cart); // { products: [{ id: 1, name: 'Bread', count: 1 }] }
//   cart.increaseCount(1, 2);
//   console.log(cart); // { products: [{ id: 1, name: 'Bread', count: 3 }] }
// //   cart.decreaseCount(1, 2);
// //   console.log(cart); // { products: [{ id: 1, name: 'Bread', count: 1 }] }
// //   cart.decreaseCount(1, 1);
//   console.log(cart); // { products: [] }

/////Class
// class User {
//   constructor(login, password) {
//     this.login = login;
//     this.password = this.reverseString(password);
//   } 
//   reverseString(str) {
//     return str.split('').reverse().join('');
//   }
  
//   changePassword(oldPassword, newPassword) {
//     if (this.comparePassword(oldPassword)) {
//       this.password = this.reverseString(newPassword);
//             console.log('Пароль изменен');
//     } else {
//       console.log('Неверный пароль. not change');
//     } 
//   }
//   comparePassword(password) {
//     return this.password === this.reverseString(password);
//   }      
// }

// const user = new User('Aleksandr', '753omaewa');
// console.log(user.login);
// console.log(user.password);

// user.changePassword('753omaewa', '234heil');
// console.log(user.password);
// user.changePassword('234he', 'wwww');

//ООП в классах
// class Enemy {
//   constructor(health) {
//       this.health = health;
//   }

//   takeDamage(damage) {
//       this.health -= damage;
//       console.log(`Враг получил ${damage} урона. Здоровье врага: ${this.health}`)
//   }
// }

// class Sword {
//   constructor(power) {
//     this.power = power;
//   }

//   dealDamage() {
//     console.log(`Меч наносит ${this.power} урона.`);
//     return this.power
//   }
// }


// class Orc extends Enemy {
//   takeDamage(damage) {
//     const chance = Math.random();
//     if (chance <= 0.5) {
//       console.log("Орк улонился от удара!");
//     } else {
//       super.takeDamage(damage);
//     }
//   }
// }

// const enemy = new Enemy(100);
// const sword = new Sword(20);
// const orc = new Orc(150);

// enemy.takeDamage(sword.dealDamage());
// orc.takeDamage(sword.dealDamage());
// orc.takeDamage(sword.dealDamage());

///запросы на сервер 
// fetch("http://dummyjson.com/products")
//   .then(response => response.json())
//   .then(data => {
//     const prices = data.products.slice(0, 30).map(product => product.price);
//     const averagePrice = prices.reduce((acc, curr) => acc + curr, 0) / prices.length;
//     console.log("Средняя цена:" + averagePrice);
//   })
//   .catch(error => {
//     console.error("Ошибка при выполнении запроса:", error);
//   });

  // const request = new XMLHttpRequest();
  // request.open("GET", "http://dummyjson.com/products");
  // request.send();

  // request.addEventListener("load", function() {
  //   const data = JSON.parse(this.responseText);
  //   console.log(data);
  // });

//promise
// fetch("http://dummyjson.com/products/categories")
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//   } else {
//     throw new Error('error');
//   }
// })
// .then(categories => {
//   //создаем элемент <select>
//   const select = document.createElement('select');

//   //добавляем опции в элемент <select>
//   categories.forEach(category => {
//     const option = document.createElement('option');
//     option.value = category;
//     option.text = category;
//     select.appendChild(option);
//   });
//   //добавляем элемент <select> в body
//   document.body.appendChild(select);

// })
// .catch(error => {
//   console.log(error);
// });

//event loop
function myFetch(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('load', function() {
          if(this.status > 400) {
            reject(new Error(this.status));
          };
          resolve(this.responseText);
    });

    request.addEventListener('error', () => {
          reject(new Error(this.status));
    });

    request.addEventListener('timeout', () => {
      reject(new Error('timeout'));
    });  
  })
}

myFetch('http://dummyjson.com/products')
.then(data => console.log(data))
.catch(error => console.log(error));

