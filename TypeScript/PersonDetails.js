"use strict";
exports.__esModule = true;
var PersonDetail = /** @class */ (function () {
    function PersonDetail() {
    }
    PersonDetail.prototype.getFullName = function () {
        return this.first + this.last;
    };
    return PersonDetail;
}());
var p1 = new PersonDetail();
p1.first = "Kuchimanchi";
p1.last = "Harshini";
console.log(p1.getFullName());
