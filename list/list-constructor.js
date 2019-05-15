'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[--this.length];
  delete this.data[this.length];
  return returnValue;
};

/**
 * Remove the first item from the list and return its value
 * @returns {*}
 */
List.prototype.shift = function () {
  let returnValue = this.data[0];
  for (let i = 0; i < this.length - 1; i++) {
    this.data[i] = this.data[i + 1];
  }
  delete this.data[--this.length];
  return returnValue;
};

List.prototype.unshift = function (item) {
  for (let i = this.length; i > 0; i--) {
    this.data[i] = this.data[i - 1];
  }
  this.data[0] = item;
  return ++this.length;
};

module.exports = List;
