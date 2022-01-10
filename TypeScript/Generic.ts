function getArray(items: any[] ): any[] {
    return new Array().concat(items);
}
let myNumArr = getArray([100,200,300]);
let mystrArr = getArray(["Hello","World"]);

myNumArr.push(400);
mystrArr.push("Hello TypeScript");

myNumArr.push("Hi");
mystrArr.push(500);


console.log(myNumArr);
console.log(mystrArr);