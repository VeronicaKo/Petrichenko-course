package practice;

import java.util.HashMap;
import java.util.Scanner;

public class RepeatWorldsCount {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter string:");
        String[] wordArr = sc.nextLine().trim().toLowerCase().split("\\s+");
        HashMap<String, Integer> map = new HashMap<>();
        for (String word : wordArr) {
            if (map.containsKey(word)) {
                map.put(word, map.get(word)+1);
            } else {
                map.put(word, 1);
            }
        }
        System.out.println(map);
        sc.close();
    }
}
