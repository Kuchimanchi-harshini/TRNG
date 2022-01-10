import { PersonalInterface } from "./PersonalInterface";

class PersonDetail implements PersonalInterface{
    first: string;
    last: string;

    getFullName(): string {
        return this.first+this.last;
    }
}
var p1=new PersonDetail();
p1.first="Kuchimanchi"
p1.last="Harshini"
console.log(p1.getFullName());