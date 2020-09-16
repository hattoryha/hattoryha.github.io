package com.company;

import java.io.Serializable;
import java.util.Scanner;

public class Main {
    public static class ReturningValues {
        private String mess;
        private double value;
        public ReturningValues(String mess, double value) {
            this.value = value;
            this.mess = mess;
        }
    }
    public static Serializable trianglePerimeterCaculator (double edge1, double edge2, double edge0){
        String mess = "values of edges are wrong";
        double value = edge1 + edge2 + edge0;
        ReturningValues rv = new ReturningValues(mess, value);
        rv.value = edge1 + edge2 + edge0;
        rv.mess = "values of edges are wrong";
        return ((edge1 + edge2 > edge0) &&(edge0 + edge2 > edge1) && (edge0 + edge1 > edge2)) ?  rv.value: rv.mess;
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the edge0");
        double edge0 = scanner.nextDouble();
        System.out.println("Enter the edge1");
        double edge1 = scanner.nextDouble();
        System.out.println("Enter the edge2");
        double edge2 = scanner.nextDouble();
        System.out.println(trianglePerimeterCaculator (edge1, edge2, edge0));
    }
}

