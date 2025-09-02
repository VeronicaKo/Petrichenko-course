package practice;
import java.util.Scanner;

public class Fahrenheit {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Input °C: ");
        int degrees = sc.nextInt();
        System.out.println("fahrenheit: " + (degrees * 9.0 / 5 + 32));
        sc.close();
    }
}
