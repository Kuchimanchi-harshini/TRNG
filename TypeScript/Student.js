"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(i, n, d) {
        this.StdId = 101;
        this.StdName = "K Harshini";
        this.StdDept = "ECE";
        this.StdId = i;
        this.StdName = n;
        this.StdDept = d;
    }
    Student.prototype.display = function () {
        console.log(this.StdId);
        console.log(this.StdName);
        console.log(this.StdDept);
    };
    return Student;
}());
exports.Student = Student;
var s1 = new Student(101, "K Harshini", "ECE");
s1.display();
