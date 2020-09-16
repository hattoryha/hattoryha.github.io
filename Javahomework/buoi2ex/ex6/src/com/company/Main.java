package com.company;

import java.util.Random;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
	// write your code here
        Random random = new Random();
        String suits[] = {"cơ", "nhép", "bích", "rô"};
        String cards[] = {"2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"};
        System.out.println("Lá bài bạn vừa rút ra là " + cards[random.nextInt(cards.length)] + " " + suits[random.nextInt(suits.length)]);
    }
}
