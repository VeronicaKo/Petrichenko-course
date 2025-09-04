package practice;
import java.util.HashSet;
import java.util.Scanner;

public class UniqueArrayElements {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        HashSet<Integer> numbers = new HashSet<>();
        for (int i = 1; i < 6; i++) {
            System.out.println("Enter " + i + "th number:");
            numbers.add(sc.nextInt());
        }
        System.out.println(numbers);
        sc.close();
    }
}
