package practice;

import java.util.Scanner;

public class StringToNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number: ");
        String input = sc.nextLine();
        try {
            int a = Integer.parseInt(input);
            System.out.println(a+a);
        } catch (NumberFormatException e) {
            System.out.println("This is not number");
        } finally {
            sc.close();
        }
    }
}
