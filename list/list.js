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
    for (let i = 0; i < this.length - 1; i++) { // needs to go to length - 1 because accessing data[length] is out of bounds
      this.data[i] = this.data[i + 1];
    }
    delete this.data[--this.length];
    return returnValue;
  }

  /**
   * Adds an item to the front of the list and returns the new length of the array
   * @param item
   * @returns {number} new array length
   */
  unshift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    return ++this.length;   
  }

}

module.exports = List;
