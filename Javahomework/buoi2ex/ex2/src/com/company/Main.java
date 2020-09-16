package com.company;

import java.util.Scanner;

public class Main {
    public static String checkYear(int year){
        String answer = "";
        switch (year >= 1984 ? (year-1984)%12 : (12 + (year-1984)%12)) {
            case 0: answer += " Rat"; break;
            case 1: answer += " Ox"; break;
            case 2: answer += " Tiger"; break;
            case 3: answer += " Rabbit"; break;
            case 4: answer += " Dragon"; break;
            case 5: answer += " Snake"; break;
            case 6: answer += " Horse"; break;
            case 7: answer += " Goat"; break;
            case 8: answer += " Monkey"; break;
            case 9: answer += " Rooster"; break;
            case 10: answer += " Dog"; break;
            case 11: answer += " Pig"; break;
            default: answer += " Wrong year num, year have to be integer type"; break;
        }
        return answer;
    }
    public static void main(String[] args) {
        // write your code here
        System.out.println("Enter the year you want to check the animal which stands for it");
        Scanner scanner = new Scanner(System.in);
        int year = scanner.nextInt();
        System.out.println(checkYear(year));

    }
}

