'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length++] = item;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    console.log('pop');
    console.log(this.data);
    let returnValue = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return returnValue;
  }

  /**
   * Remove the first item from the list and return its value
   * @returns {*}
   */
  shift() {
    for (let i = 0; i < this.length; i++) {
      this[i-1] = this[i];
    }
    let returnValue = this.data[-1];
    delete this.data[-1];
    return returnValue;
  }

}

module.exports = List;
