package com.sonata;

public class ProductClass {

	int proid;
	String proname;
	double proprice;
	
	ProductClass()
	{
		
	}
	
	
	
	 public double add(double GST)
	 {
		 proprice=proprice+GST;
		 return proprice;
	 }
	
	
	public void display()
	{
		System.out.println(proid);
		System.out.println(proname);
		System.out.println(proprice);
	}


public static void main(String args[])
{
	ProductClass p = new ProductClass();
	p.proid= 101;
	p.proname = "Mobile";
	p.proprice = 95000;
	p.display();
	System.out.println(p.add(11.12));
}
}
	
