'use strict';

// These 2 should be interchangeable!
const List = require('../list.js');
// const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of 0 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('pops items off the end of the data set, returning the popped item', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.pop()).toEqual('b');
    expect(stuff.data[0]).toEqual('a');
    expect(stuff.length).toEqual(1);
  });

  it('shift removes an item from the front and returns it', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.shift()).toEqual('a');
    expect(stuff.data[0]).toEqual('b');
    expect(stuff.length).toEqual(1);
  });

  it('unshift adds an item to the front', () => {
    let stuff = new List();
    stuff.unshift('a');
    stuff.unshift('b');
    expect(stuff.data[0]).toEqual('b');
    expect(stuff.length).toEqual(2);
  });

  it('forEach performs a provided callback function on each data element', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    let test = [];
    stuff.forEach((item, idx, list) => {
      expect(list).toEqual(stuff.data);
      test[idx] = item + ' prime';
    });
    expect(test).toEqual(['a prime', 'b prime']);
  });

});
