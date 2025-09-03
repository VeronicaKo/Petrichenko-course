package practice;

import java.util.Arrays;
import java.util.Scanner;

public class Vowels {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] vowels = { "a", "e", "i", "o", "u" };
        int vowelsCount = 0;
        System.out.println("Enter string: ");
        String words = sc.nextLine();
        for (int i = 0; i < words.length(); i++) {
            if (Arrays.binarySearch(vowels, words.substring(i, i + 1)) >= 0) {
                vowelsCount++;
            }
        }
        System.out.println("Count of vowels: " + vowelsCount);
        sc.close();
    }
}
