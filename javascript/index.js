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
// 	Person.apply(this, [name, age]);
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
// class Employee extends Person {
// 	constructor(name, age, salary) {
// 		super(name, age);
// 		this.salary = salary;
// 	}
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
// // shallow copy deep copy
// const obj = {
//   n: 'n',
//   roomlist: [12, 12, 41],
//   date: new Date(),
//   fn: function() {}
// };
// const obj1 = obj;

// const obj2 = {
//   ...obj,
//   roomlist: [...obj.roomlist]
// };

// const obj3 = JSON.parse(JSON.stringify(obj));
// const obj4 = structuredClone(obj);

// console.log('sturctured: ', obj4);
// console.log(obj, obj3);

// * ~~~~~~~~~~~~~~~~~~~~~ closure, iife, currying, high order function;

// const callback = (a, b) => a + b;
// const fn = limitedFunction(3, callback); // c

// console.log(fn(2, 4)); // 6; [counter: 2]
// console.log(fn(2, 4)); // 6; [counter: 1]
// console.log(fn(2, 4)); // 6; [counter: 0]
// console.log(fn(2, 4)); // over limited
// console.log(fn(2, 4)); // over limited
// console.log(fn(2, 4)); // over limited
// console.log(fn(2, 4)); // over limited

// function limitedFunction(num, callback) {
// 	let counter = num;
// 	return function (...args) {
// 		if (counter === 0) {
// 			return "over limited";
// 		} else {
// 			counter--;
// 			return callback(...args);
// 		}
// 	};
// }

// (function (arg) {
//   console.log('hello', arg);
// }('hi'))

// fn(4)(5); // 9
// function fn(a) {
//   return function(b) {
//     console.log(a + b);
//   }
// }

// const arr = [1, 2, 3, 4]; // each ele + 100;
// // const plus1 = (ele) => {
// //   return ele + 1;
// // };
// // const plus100 = (ele) => {
// //   return ele + 100;
// // };
// const plus = (num) => {
//   return (ele, i, thearr) => {
//     return ele + num;
//   }
// }
// console.log(arr.map(plus(1)));

// * ~~~~~~~~~~~~~~~~~~~~~ this --> object;
// * ~~~~~~~~~~~~~~~~~~~~~ arrow function;

// module.exports.name = 'Dio'
// console.log(this);

// const obj = {
// 	name: "Dio",
// 	fn: function() {
// 	  console.log('fn: ', this.name);

// 	  (() => {
// 	    console.log('iife: ', this.name);
// 	  })();

// 	  (function() {
// 	    console.log('iife: ', this);
// 	  })();
// 	// fn: () => {
// 	// 	console.log(this.name);
// 	// },
//   }
// }
// obj.fn();

// call, apply, bind;
// const obj = {
// 	name: "Dio",
// };
// function getName(m, n, q, t, r) {
// 	// args: 5
// 	console.log(this.name, m, n);
// }
// const wrapperGetName = getName.bind(obj);
// wrapperGetName(3, 4);

// getName.call(obj, 3, 4); // args + 1
// getName.apply(obj, [3, 4]); // this, [args]

// & ~~~~~~~~~~~~~~~~~~~~~ interview questions;
// const arr2 = [
//   'AAPL',
//   'MSFT',
//   'BAC',
//   ['JPM', 'TSLA'],
//   ['DOW', ['COIN', ['MMM']]] // flat
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
// // const third = [
// //   { userid: 12, address: '098' },
// // ];
// console.log(solution(first, second));
// function solution(...args) {
//   const arr = args.reduce((acc, cur) => [...acc, ...cur], []);
//   const map = {};

//   arr.forEach((e) => {
//     map[e.userid] = {
//       ...{userid: null, name: null, role: null},
//       ...map[e.userid],
//       ...e
//     }
//   });
//   return Object.values(map);
//   /* {
//     2: { userid: 2, name: 'Velen' }, {...map[key], ...curobj}
//   } */
// }
/* [
  { userid: 2, name: 'Velen', role: 'Mage' },
  { userid: 44, name: 'Cenarius', role: null },
   ...
] */

// const callback1 = (a) => a + 3;
// const callback2 = (a) => a - 5;
// const callback3 = (a) => a * 2;

// console.log(runAll(callback1, callback2, callback3)(6));

// function runAll(...fns) {
//   return function(num) {
//     return fns.reduce((acc, fn) => fn(acc), num);
//   }
// }

// * ~~~~~~~~~~~~~~~~~~~~~ event loop

// i === 5;
// for (var i = 0; i < 5; i++) {
// 	(function (v) {
// 		setTimeout(() => console.log(v), (5 - v) * 1000);
// 	})(i);
// } // 0, 1, 2, 3, 4

/* 
  callstack: [() => console.log(i), 1s [4]]
  async api: [
    
    
    
    
    
  ];
  callback queue: [
   
    () => console.log(i), 2s [3]
    () => console.log(i), 3s [2]
    () => console.log(i), 4s [1]
    () => console.log(v), 5s, [0]
  ]
*/

// * ~~~~~~~~~~~~~~~~~~~~~ promise --> MyPromise;
// const foo = () => console.log("foo");
// const randomTime = () => Math.floor(Math.random() * 6);

// const callFnByRandomeTime = (callback) => {
// 	const timer = randomTime();
// 	console.log(timer);

// 	setTimeout(callback, timer * 1000);
// };

// // callFnByRandomeTime(foo);
// callFnByRandomeTime(() => {
// 	callFnByRandomeTime(() => {
// 		callFnByRandomeTime(() => {
// 			callFnByRandomeTime(() => {
// 				callFnByRandomeTime(() => {
// 					callFnByRandomeTime(() => {
// 						callFnByRandomeTime(() => {
// 							callFnByRandomeTime(foo);
// 						});
// 					});
// 				});
// 			});
// 		});
// 	});
// });
// XMLHTTPREQUEST

// function print(data) {
//   console.log(data)
// }

// function getTodo(id) {
//   return new Promise((res, rej) => {

//     const baseUrl = "https://jsonplaceholder.typicode.com";
//     const todoPath = "todos";

//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         res(JSON.parse(xhttp.responseText)); // & --- resolve data;
//       }
//     };
//     xhttp.open("GET", [baseUrl, todoPath, id].join("/"));
//     xhttp.send();
//   });
// }
// // [44, 33, 66]
// getTodo(44)
//   .then(data => { //  10mins
//     print(data);
//     return getTodo(33); // 10
//   })
//   .then(data => {
//     print(data);
//     return getTodo(66); // 10mins
//   })
//   .then(data => {
//     print(data);
//   }); // 10mins

// for (const promise of promiseArr) {
//   promise
// }

// // async await
// (async function() {
//   print(await getTodo(44));
//   print(await getTodo(33));
//   print(await getTodo(66));
// })();

// getTodo(print, 33);
// getTodo(print, 66);

// class MyPromise {
// 	thenQueue = [];

// 	constructor(executor) {
// 		try {
// 			executor(this.reslove.bind(this), this.reject);
// 		} catch (error) {
// 			this.catch(error);
// 		}
// 	}

// 	reslove(resloveValue) {
// 		try {
// 			setTimeout(() => {
// 				let val = resloveValue;
// 				while (this.thenQueue.length) {
// 					const fn = this.thenQueue.shift(); // shift, unshift, pop, push
// 					if (val instanceof MyPromise) {
// 						val.then((data) => {
// 							val = fn(data);
// 						});
// 					} else {
// 						val = fn(val);
// 					}
// 				}
// 			}, 0);
// 		} catch (error) {
// 			this.catch(error);
// 		}
// 	}

// 	reject = () => {
// 		// console.log('from reject', this.name);
// 	};

// 	then(thenFn) {
// 		this.thenQueue.push(thenFn);
// 		return this;
// 	}
// 	catch(catchFn) {
// 		this.catchQueue.push(catchFn);
// 		return this;
// 	}

// 	static resolve(srv) {
// 		return new MyPromise((res, _) => {
// 			res(srv);
// 		});
// 	}
// 	static reject(srjv) {
// 		return new MyPromise((_, rej) => {
// 			rej(srjv);
// 		});
// 	}
//   static all(promiseArr) {
//     return new MyPromise((res, rej) => {
//       const resArr = new Array(promiseArr.length);
//       let counter = 0;

//       promiseArr.forEach((promise, i) => {
//         if (promise instanceof MyPromise) {
//           promise.then(data => {
//             counter++;
//             resArr[i] = data;
//             if (counter === promiseArr.length) {
//               res(resArr);
//             }
//           });
//         } else {
//           counter++;
//           resArr[i] = promise;
//           if (counter === promiseArr.length) {
//             res(resArr);
//           }
//         }
//       });
//     });
//   }
// }

// new MyPromise((resolve, reject) => {
//   resolve(3); // ----> msgqueue
// })
// .then((resv) => {
//   const newNum = resv + 'hello'; // 3hello
//   return new MyPromise((res, rej) => {
//     res(newNum)
//   })
// }).then((resv) => {
//   console.log(resv + 200);
// });

// const promise1 = MyPromise.resolve(3);
// const promise2 = 42;
// const promise3 = new MyPromise((resolve, reject) => {
// 	setTimeout(resolve, 100, 'foo');
// 	// resolve("foo");
// });
// //              44,    33,      66
// MyPromise.all([promise1, promise2, promise3]).then((values) => {
// 	console.log(values);
// });

// // & ~~~~~~~~~~~~~~~~~~~~~ interview questions;
// const add = (a, b) => a + b;
// const multiplyByTwo = (c) => c * 2;
// // example 1 // await promisifyFunction(add)(1, 1) should return 2
// // example 2 // await promisifyFunction(multiplyByTwo)(3).then(val => val + 1) should return 7

// function promisifyFunction(cb) {
//   return function(...args) {
//     return new Promise((res) => {
//       res(cb(...args));
//     });
//   }
// }

// (async () => {
//   await promisifyFunction(add)(1, 1).then(console.log);
//   await promisifyFunction(multiplyByTwo)(3).then(val => val + 1).then(console.log);
// })();

const baseUrl = "https://jsonplaceholder.typicode.com";
const todoPath = "todos";

function myFetch(url, options) {
	return new Promise((res) => {
		const method = options && options.method ? options.method : "GET";

		const xhttp = new XMLHttpRequest();
    xhttp.open(method, url);

		if (options && options.headers) {
			Object.entries(options.headers).forEach(([key, val]) => {
				xhttp.setRequestHeader(key, val);
			});
		}
		xhttp.onreadystatechange = function () {
			if (
				this.readyState == 4 &&
				this.status >= 200 &&
				this.status < 300
			) {
				// res(JSON.parse(xhttp.responseText)); // & --- resolve data;
				res({
					json: function () {
						return Promise.resolve(JSON.parse(xhttp.responseText));
					},
				});
			}
		};
		options && options.body ? xhttp.send(options.body) : xhttp.send();
	});
}

myFetch([baseUrl, todoPath].join("/"), {
	method: "POST",
	body: JSON.stringify({
		title: "foo",
		body: "bar",
		userId: 1,
	}),
	headers: {
		"Content-type": "application/json; charset=UTF-8",
	},
})
	.then((response) => response.json())
	.then((json) => console.log(json));

// myFetch([baseUrl, todoPath, 22].join('/'))
//   .then((response) => response.json())
//   .then((json) => console.log(json));
