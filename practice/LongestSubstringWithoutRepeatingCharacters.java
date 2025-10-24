package practice;

import java.util.Arrays;
import java.util.HashSet;

public class LongestSubstringWithoutRepeatingCharacters {
    public static void main(String[] args) {
        String s = "abcabcbb";
        String sub = "";
        String longest = "";
        for (int i = 0; i < s.length(); i++) {
            for (int j = 0; j < s.length(); j++) {
                sub = s.substring(i, j);
                HashSet<String> set = new HashSet<>(Arrays.asList(sub.split("")));
                if (sub.length() > longest.length() && set.size() == sub.length()) {
                    longest = sub;
                }
                System.out.println(longest.length());
            }
        }
    }
}
