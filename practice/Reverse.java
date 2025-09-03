package practice;

import java.util.Arrays;
import java.util.Scanner;

public class Reverse {
public static void main(String[] args) {
    int[] arr = new int[5];
    Scanner sc = new Scanner(System.in);
    for (int i = 1; i <= arr.length; i++) {
        System.out.println("Enter " + i + "th number: ");
        arr[arr.length - i] = sc.nextInt();
    }
    System.out.println(Arrays.toString(arr));
   sc.close();
}
}
