package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
	// write your code here
        Scanner input = new Scanner(System.in);
        System.out.printf("Nhap khoan tien vay: ");
        float loan = input.nextFloat();
        input.nextLine();
        System.out.printf("Nhap lai suat gan hang percent/year: ");
        float interest = input.nextFloat();
        double r = (double) interest / 1200;
        input.nextLine();
        System.out.printf("Nhap thoi gian vay (tinh bang thang): ");
        int monthNumber = input.nextInt();
        input.nextLine();
        double M = (double) loan * r * Math.pow ((1 + r), monthNumber) / (Math.pow ((1 + r), monthNumber) - 1);
        System.out.println("So tien phai tra  trong " + monthNumber + " thang la $: " + M);
    }
}





