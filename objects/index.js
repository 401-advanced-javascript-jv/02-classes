'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const VehicleClass = require('./vehicle-constructor.js');

const camry = new VehicleClass.Car('Camry');
console.log(camry.name, camry.drive(), camry.stop());

const ducati = new VehicleClass.Motorcycle('Ducati');
console.log(ducati.name, ducati.drive(), ducati.wheelie(), ducati.stop());

// Implement a car and motorcycle using a Factory
