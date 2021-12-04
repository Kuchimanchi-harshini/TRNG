package com.sonata;

public class StudentExample {
	
		int stdId;
		String stdName;
		int stdClass;
		StudentExample(int a,String b,int c){
			this.stdId=a;
			this.stdName=b;
			this.stdClass=c;
		}
		public void display() {
			System.out.println(stdId);
			System.out.println(stdName);
			System.out.println(stdClass);	
		}
		public static void main(String args[]) {
			StudentExample s=new StudentExample(101,"Harshini",90);
			s.display();
			StudentExample s1=new StudentExample(102,"Sowmya",80);
			s1.display();
		}
	}