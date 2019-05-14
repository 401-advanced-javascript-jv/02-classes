'use strict';

const Vehicle = (name, wheels) => ({
  name,
  wheels,
  drive() {
    return 'Moving Forward';
  },
  stop() {
    return 'Stopping';
  },
});

function Car(name) {
  let car = Object.assign(
    {},
    Vehicle(name, 4)
  );

  return Object.freeze(car);
}

function Motorcycle(name) {
  let motorcycle = Object.assign(
    {},
    {wheelie},
    Vehicle(name, 2)
  );

  function wheelie () {
    return 'Wheee!';
  }

  return Object.freeze(motorcycle);
}

module.exports = {Car, Motorcycle};