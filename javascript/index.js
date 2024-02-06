// var a = undefined;

/*
 * @class
 * what is javascript, ECMAScript
 * javascript vs. nodejs vs. ECMAScript
 *
 * Primitive Data
 * Object Data or reference Data
 *
 * coercion
 * equality == vs. ===
 *
 * var vs. let vs. const
 *
 * oop: Object oriented programming in JS
 * encapsulation; inheritance; Poly-morph-ism; abstraction;
 * constructer function, prototype chain
 */
// // const a = 'test' // NaN
// const arr = [];
// const obj = {};
// console.log(isNaN(a))
// console.log(Array.isArray(arr)); // 11;

// console.log(require('module').wrapper);

// // function test() {
//   if (true) {
//     let a = 123;
//   }
// // }
// console.log(a);
//
// function Person(name, age) {
// 	let _name = name;
// 	let _age = age;

// Object.defineProperty(this, "name", {
// 	get: function () {
// 		return this._name;
// 	},
// 	set: function (newname) {
// 		this._name = newname;
// 	},
// });
// }
// Person.prototype.run = function () {
//   console.log(`${this._name} is running!`);
// };
// function Employee(name, age, salary) {
//   Person.apply(this, [name, age]);
//   this.salary = salary;
// }
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;
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

// const e = new Employee("Dio", 99, 10);
// e.run();
// console.log(e);

// // immutable, mutable;

// let obj = {};

// // obj.name = 'Jojo';
// obj = {
//   ...obj,
//   name: 'Jojo'
// }
// console.log(obj);

// loop;
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

// // destructure
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


// spreadoperator and restparameter

// const arr = [1, 2, 3];
// const narr = [1, 2, 3, 1, 2, 3, 3, 6];

// function fn(m, ...args) {
//   console.log(m, n, args);
// }
// fn(3, 5, 7);