package com.company;

import java.util.Scanner;

public class Main {

    public static boolean checkYear(int year){
        return (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0));
    }
    public static void main(String[] args) {
	// write your code here
        System.out.println("Enter the year you want to check whether It is a leap year");
        Scanner scanner = new Scanner(System.in);
        int year = scanner.nextInt();
        System.out.println(checkYear(year) ? "Leap Year" : "Not a Leap Year ");
    }
}

