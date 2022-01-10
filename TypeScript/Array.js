/*
const array = [1,2,3,4,5];
if(array.some(food => food === 1))
{
    console.log("The number is present");
}
else{
    console.log("The number is not present");
}*/
var Specificvalue = /** @class */ (function () {
    function Specificvalue() {
        this.numarr = [1, 2, 3, 4];
    }
    Specificvalue.prototype.find = function () {
        for (this.i = 0; this.i < this.numarr.length; this.i = this.i + 1) {
            if (4 == this.numarr[this.i]) {
                console.log("number found");
            }
        }
    };
    return Specificvalue;
}());
var arr = new Specificvalue();
arr.find();
