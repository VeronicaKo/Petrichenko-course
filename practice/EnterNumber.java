package practice;

import java.util.Scanner;

public class EnterNumber {
    public static void main(String[] args) throws NegativeNumberException {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number: ");
        int a = sc.nextInt();
        sc.close();
        try {
            if (a < 0) {
                throw new NegativeNumberException("Number can't be negative");
            }
            System.out.println("Your number: " + a);
        } catch (NegativeNumberException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
