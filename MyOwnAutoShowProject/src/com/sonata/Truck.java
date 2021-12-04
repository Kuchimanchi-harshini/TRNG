package com.sonata;

public class Truck extends Car{
	int weight;
	
	Truck(int speed,double regularPrice,String color,int weight, int i)
	{
		super(speed,regularPrice,color);
		this.weight=weight;
	}
	public double getSalePrice2() {
		return regularPrice;
	}
	public double getSalePrice()
	{
		super.getSalePrice();
		if(weight>2000)
		{
			return super.getSalePrice()-(super.getSalePrice()*0.1);
		}
		else
		{
			return super.getSalePrice()-(super.getSalePrice()*0.1);
		}
	}
}
	