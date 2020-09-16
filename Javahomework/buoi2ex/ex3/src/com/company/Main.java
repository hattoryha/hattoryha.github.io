package com.company;

import java.util.Random;
import java.util.Scanner;

public class Main {
    public static String randomMonthGenerator(){
        Random rand = new Random();
        int numberOfMonth = rand.nextInt(12) + 1;
        String answer = "";
        switch (numberOfMonth) {
            case 1: answer += " January"; break;
            case 2: answer += " February"; break;
            case 3: answer += " March"; break;
            case 4: answer += " April"; break;
            case 5: answer += " May"; break;
            case 6: answer += " June"; break;
            case 7: answer += " July"; break;
            case 8: answer += " August"; break;
            case 9: answer += " September"; break;
            case 10: answer += " October"; break;
            case 11: answer += " November"; break;
            case 12: answer += " December"; break;
        }
        return answer;
    }
    public static void main(String[] args) {
        System.out.println(randomMonthGenerator());
    }
}

