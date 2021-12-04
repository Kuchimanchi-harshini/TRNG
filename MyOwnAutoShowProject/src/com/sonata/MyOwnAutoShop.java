package com.sonata;

public class MyOwnAutoShop {
	public static void main(String args[])
	{
		Car c = new Car(400,102000,"Gray");
		Sedan s = new Sedan(200,140000,"Black",50);		
		Ford f = new Ford(300,1280000,"Red",2012,38);
		Truck t = new Truck(150,170020,"Voilet",2009,70);
		
		System.out.println("Car");
		c.display();
		System.out.println("Sale Price of Car:"+c.getSalePrice());
		
		System.out.println("Sedan");
		s.display();
		System.out.println("Sale Price of Sedan:"+s.getSalePrice());
		System.out.println(s.length);
				
		System.out.println("Ford ");
		f.display();
		System.out.println(f.year);
		System.out.println(f.manufacturerDiscount);
		System.out.println("Sale Price of ford:"+f.getSalePrice());
		
		System.out.println("Truck");
		t.display();
		System.out.println("Sale Price of Truck:"+t.getSalePrice2());
	}

}