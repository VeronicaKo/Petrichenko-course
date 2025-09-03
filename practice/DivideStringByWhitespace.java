package practice;

import java.util.Scanner;

public class DivideStringByWhitespace {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a string: ");
        String[] arr = sc.nextLine().trim().split("\\s+");
        for (String s : arr) {
            System.out.println(s);
        }
        sc.close();
    }
}
