package practice;

import java.util.HashMap;
import java.util.Scanner;

public class PhoneBook {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        HashMap<String, Long> map = new HashMap<>();
        for (int i = 1; i < 4; i++) {
            System.out.println("Enter " + i +"th name:");
            String name = sc.nextLine();

            System.out.println("Enter phone:");
            Long phone = sc.nextLong();
            sc.nextLine();
            map.put(name, phone);
        }
        System.out.println(map);
        sc.close();
    }
}
