export class Car{
    speed:number=120;
    regularPrice:number=20000;
    color:string="Red";
    getSalePrice()
    {
        console.log(this.regularPrice);
    }
}