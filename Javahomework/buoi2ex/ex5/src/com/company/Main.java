package com.company;

import java.util.Scanner;

public class Main {
    public static String checkPoint(double X, double Y){
    return Math.abs(X) <= 5 && Math.abs(Y) <= 10 ? "the point is inside the rectangle" : "the point is outside the rectangle";
    }
    public static void main(String[] args) {
        // write your code here
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter X of the point:");
        double X = scanner.nextDouble();
        System.out.println("Enter Y of the point:");
        double Y = scanner.nextDouble();
        System.out.println(checkPoint(X, Y));
    }
}

