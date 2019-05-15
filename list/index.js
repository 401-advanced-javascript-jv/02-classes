'use strict';

const List = require('./list-constructor.js');

// let stuff = new List();
// stuff.push('a');
// stuff.push('b');
// console.log(stuff);
// let last = stuff.pop();
// console.log(last);

// let thing = new List();
// thing.push('a');
// thing.push('b');
// thing.push('c');
// thing.push('d');
// console.log(thing);
// let first = thing.shift();
// console.log(thing, first);

// last = thing.pop();
// console.log(last, thing);

let arry = new List();
arry.push('first');
arry.push('2');
arry.push('c');
arry.push('nope');
console.log(arry);

arry.unshift('blue');
console.log(arry);
console.log(arry.pop());
console.log(arry.shift());
console.log(arry.pop());
console.log(arry.pop());
console.log(arry.shift());
console.log(arry);
