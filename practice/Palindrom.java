package practice;

import java.util.Scanner;

public class Palindrom {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter word: ");
        String words = sc.nextLine();
        StringBuilder reversed = new StringBuilder(words).reverse();
        System.out.println("Is it palindrom? " + words.equalsIgnoreCase(reversed.toString()));
        sc.close();
    }
}
