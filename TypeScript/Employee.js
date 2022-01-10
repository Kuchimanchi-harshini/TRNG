"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(i, n, s) {
        this.empId = 21298;
        this.empName = "K Harshini";
        this.empSal = 25000;
        this.empId = i;
        this.empName = n;
        this.empSal = s;
    }
    Employee.prototype.display = function () {
        console.log(this.empId);
        console.log(this.empName);
        console.log(this.empSal);
    };
    return Employee;
}());
exports.Employee = Employee;
var e1 = new Employee(21298, "K Harshini", 25000);
e1.display();
