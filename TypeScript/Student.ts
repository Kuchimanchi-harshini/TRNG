export class Student{
    StdId:number = 101;
    StdName:string ="K Harshini";
    StdDept:String = "ECE"

    constructor(i:number,n:string,d:String){
        this.StdId=i;
        this.StdName=n;
        this.StdDept=d;
    }
    display(){
        console.log(this.StdId);
        console.log(this.StdName);
        console.log(this.StdDept);

    }
}
var s1 =new Student(101,"K Harshini","ECE");
s1.display();