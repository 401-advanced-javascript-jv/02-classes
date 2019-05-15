'use strict';

const List = require('./list.js');

let stuff = new List();
stuff.push('a');
stuff.push('b');
console.log(stuff);
let last = stuff.pop();
console.log(last);

let thing = new List();
thing.push('a');
thing.push('b');
thing.push('c');
thing.push('d');
console.log(thing);
let first = thing.shift();
console.log(first);