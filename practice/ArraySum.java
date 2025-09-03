package practice;

import java.util.Scanner;

public class ArraySum {
    public static void main(String[] args) {
        int arrSum = 0;
        Scanner sc = new Scanner(System.in);
        for (int i = 0; i < 3; i++) {
            System.out.println("Enter " + (i + 1) + "th number of 3");
            arrSum += sc.nextInt();
        }
        System.out.println("Sum of elements: " + arrSum);
        sc.close();
    }
}
