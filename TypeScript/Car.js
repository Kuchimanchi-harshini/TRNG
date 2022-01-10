"use strict";
exports.__esModule = true;
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car() {
        this.speed = 120;
        this.regularPrice = 20000;
        this.color = "Red";
    }
    Car.prototype.getSalePrice = function () {
        console.log(this.regularPrice);
    };
    return Car;
}());
exports.Car = Car;
