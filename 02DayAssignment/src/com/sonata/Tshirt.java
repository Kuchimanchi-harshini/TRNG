package com.sonata;

public class Tshirt {
	String color;
	String material;
	String design;
	String Size;
	
	public Tshirt(String cl,String mt,String de,String si) {
		
	
	this.color=cl;
	this.material=mt;
	this.design=de;
	this.Size=si;
	
	}
	
	public void small() {
		
		System.out.println("This is Small size");
		
	}
	
	public void Medium() {
		System.out.println("This is  Large size");
		
	}
	public void Large() {
		System.out.println("This is Xtra-Large size");
	}
	
	public void display() {
		System.out.println("Color: "+color);
		System.out.println();
		System.out.println("Material: "+material);
		System.out.println();
		System.out.println("Design: "+design);
		System.out.println();
		System.out.println("Size: "+Size);
		System.out.println();
		
	}
	
	public static void main(String[]args) {
		Tshirt t1=new Tshirt("Red","cotton","Fullsleave","S");
		System.out.println();
		t1.display();
		t1.small();
		Tshirt t2=new Tshirt("Pink","Polyster","sleaveless","L");
		System.out.println();
		t2.display();
		t2.Medium();
		Tshirt t3=new Tshirt("Voilet","Silk","Shortsleave","XL");
		System.out.println();
		t3.display();
		t3.Large();
	}
}


