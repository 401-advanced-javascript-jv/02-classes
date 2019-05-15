'use strict';

class List {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list and return the list's new length
   * @param item
   * @returns {number} new array length
   */
  push(item) {
    // Add an item to the end
    this.data[this.length++] = item;
    return this.length;
  }

  /**
   * // Remove an item from the end of the list and return its value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[--this.length];
    delete this.data[this.length];
    return returnValue;
  }

  /**
   * Remove the first item from the list and return its value
   * @returns {*}
   */
  shift() {
    let returnValue = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      // needs to go to length - 1 because accessing data[length] is out of bounds
      this.data[i] = this.data[i + 1];
    }
    delete this.data[--this.length];
    return returnValue;
  }

  /**
   * Adds an item to the front of the list and returns the new length of the list
   * @param item
   * @returns {number} new list length
   */
  unshift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    return ++this.length;
  }

  /**
   * Performs a given callback function on each element in the list
   * @param {function} callback(currentValue[, index[, list]])
   * @param currentValue current list item
   * @param index (optional) current index
   * @param list (optional) the data list which forEach was called on
   */
  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this.data[i], i, this.data);
    }
    return undefined;
  }
}

module.exports = List;
