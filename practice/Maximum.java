package practice;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class Maximum {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>();

        Scanner sc = new Scanner(System.in);
        System.out.println("Input first number:");
        numbers.add(sc.nextInt());
        System.out.println("Input second number:");
        numbers.add(sc.nextInt());
        System.out.println("Input third number:");
        numbers.add(sc.nextInt());

        System.out.println("Maximum of numbers: " + Collections.max(numbers));
        sc.close();
    }

}
