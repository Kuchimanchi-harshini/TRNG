export class Employee{
    empId:number = 21298;
    empName:string ="K Harshini";
    empSal:number =25000

    constructor(i:number,n:string,s:number){
        this.empId=i;
        this.empName=n;
        this.empSal=s;
    }
    display(){
        console.log(this.empId);
        console.log(this.empName);
        console.log(this.empSal);

    }
}
var e1 =new Employee(21298,"K Harshini",25000);
e1.display();