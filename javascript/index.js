// * ~~~~~~~~~~~~~~~~~~~ coercion;
// const arr = [];
// const obj = {};
// console.log(isNaN(a))
// console.log(Array.isArray(arr)); // 11;

// console.log(require('module').wrapper);

// * ~~~~~~~~~~~~~~~~~~~ var, let, const;
//-----------------------------var vs. let vs. const-------------------------
//                    var     |      let    |      const
// hoisting            yes           yes            yes
// scope             function       block          block
// inital value      undefined       -               - 

// // function test() {
//   if (true) {
//     let a = 123;
//   }
// // }
// console.log(a);
//

// * ~~~~~~~~~~~~~~~~~~~~ oop;
// function Person(name, age) {
// 	let _name = name;
// 	let _age = age;

//   Object.defineProperty(this, "name", {
// 		get: function () {
// 			return _name;
// 		},
// 		set: function (newname) {
// 			_name = newname;
// 		},
// 	});
// }
// Person.prototype.run = function () {
// 	console.log(`${this.name} is running!`);
// };
// function Employee(name, age, salary) {
// 	Person.call(this, name, age);
// 	this.salary = salary;
// }
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// const e = new Person("Dio", 99, 10);
// e.run();
// console.log(e.name);

// es6: const and let, class
// class Person{
//   constructor(name, age) {
//     this._name = name;
//     this.age = age;
//   }
//   run() {
//     console.log(`${this.name} is running!`);
//   }
// }
// class Employee extends Person{
//   constructor(name, age, salary) {
//     super(name, age);
//     this.salary = salary;
//   }
// }
// // immutable, mutable;
// let obj = {};

// // obj.name = 'Jojo';
// obj = {
//   ...obj,
//   name: 'Jojo'
// }
// console.log(obj);

// * ~~~~~~~~~~~~~~~~~~~ loop;
// const arr = [122, 123];
// // console.log(arr['1']);
// const obj = {
//   name: 'Jojo',
//   age: 12
// }
// // console.log(obj['name']);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   break;
// }
// for (const key in obj) {
//   continue;
//   console.log(obj[key]);
// }

// Array.prototype.myForEach = function (fn) {
// 	for (let i = 0; i < this.length; i++) {
// 		fn(this[i], i, this);
// 	}
// };
// Array.prototype.myFilter = (fn) => {
// 	let result = [];
// 	for (let i = 0; i < this.length; i++) {
// 		if (fn(this[i], i, this)) {
// 			result.push(this[i]);
// 		}
// 	}
// 	return result;
// };
// const arr = [111, 2, 3, 4, 5];
// // arr.myForEach();

// const tar = arr.filter((e, i, theArr) => {
// 	return e > 4;
// });
// console.log(tar);

// includes
// const arr = new Array();
// console.log(arr);

// const arr = [111, 2, 3, 4, 5];

// arr.forEach(() => {
//   console.log(this.name);
// }, {name: 'Jojo'});

// arrow function; es6
// function fn() {}
// const fn = () => {}

// reduce;
// Array.prototype.myReduce = (fn, option) => {
// 	let result = [];
// 	for (let i = 0; i < this.length; i++) {
// 		if (fn(this[i], i, this)) {
// 			result.push(this[i]);
// 		}
// 	}
// 	return result;
// };
// const str = 'abc';
// /* fu => 'aabbcc'; */ [a, b, c]
// const a = str.split('').reduce((acc, cur, i, theArr) => acc + cur + cur, '');

// '' + 'a' + 'a' = 'aa' + 'b' + 'b' = aabb + c + c = aabbcc
// console.log(a);
// const nums = [10, 4, 5]; // 21
// let sum = 0;
// for (const num of nums) {
//   sum += num;
// }

// console.log(nums.reduce((sum, num) => {
//   console.log('hello')
//   return sum - num;
// }));

// const obj = {
//   name: 'hello'
// };
// for (let key in obj ) {
//   console.log(key)
// }
// Object.keys(obj);
// Object.values(obj);
// Object.entries(obj).forEach((ele) => {
//   console.log('key: ', ele[0], 'value: ', ele[1])
// });

// * ~~~~~~~~~~~~~~~~~~~~~~~ destructure;
// const obj = {
// 	name: "Jojo",
// 	age: 12,
// };
// const nobj = {
//   ...obj,
//   salary: 12
// }
// const [i, j] = [23, 45];
// const { age, name: myName } = obj;
// console.log(i, j, age, myName);

// let a = 4;
// let b = 5;

// [a, b] = [b, a];

// const tmp = a;
// a = b;
// b = tmp;

// * ~~~~~~~~~~~~~~~~~~~~~ spreadoperator vs. restparameter;

// const arr = [1, 2, 3];
// const narr = [1, 2, 3, 1, 2, 3, 3, 6];

// function fn(m, ...args) {
//   console.log(m, n, args);
// }
// fn(3, 5, 7);

// * ~~~~~~~~~~~~~~~~~~~~~ obj clone;

// * ~~~~~~~~~~~~~~~~~~~~~ closure, iife, currying;

// * ~~~~~~~~~~~~~~~~~~~~~ this;

// * ~~~~~~~~~~~~~~~~~~~~~ arrow function;

// * ~~~~~~~~~~~~~~~~~~~~~ event loop

// & ~~~~~~~~~~~~~~~~~~~~~ interview questions;
// const arr2 = [
//   'AAPL',
//   'MSFT',
//   'BAC',
//   ['JPM', 'TSLA'],
//   ['DOW', 'COIN', 'MMM']
// ]; // ['AAPL', 'MSFT', 'BAC', 'JPM', 'TSLA', 'DOW', 'COIN', 'MMM']

// const first = [
//     { userid: 2, name: 'Velen' },
//     { userid: 56, name: 'Illidan' },
//     { userid: 23, name: 'Muradin' },
//     { userid: 12, name: 'Sylvanas' },
//     { userid: 44, name: 'Cenarius' },
//     { userid: 4, name: 'Gul\'Dan' }
// ];
// const second = [
//     { userid: 2, role: 'Mage' },
//     { userid: 4, role: 'Worlock' },
//     { userid: 56, role: 'Demon Hunter' },
//     { userid: 66, role: 'Druid' },
//     { userid: 87, role: 'Shaman' },
//     { userid: 12, role: 'Hunter' },
// ];

// const fn = limitedFunction(3， callback); // c

// console.log( runAll(callback1, callback2, callback3)(6) ); 


// * ~~~~~~~~~~~~~~~~~~~~~ promise --> MyPromise;

// & ~~~~~~~~~~~~~~~~~~~~~ interview questions;
// const add = (a, b) => a + b;
// const multiplyByTwo = (c) => c * 2;
// example 1 // await promisifyFunction(add, 1, 1) should return 2
// example 2 // await promisifyFunction(multiplyByTwo)(3).then(val => val + 1) should return 7