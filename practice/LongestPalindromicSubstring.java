package practice;

public class LongestPalindromicSubstring {
    public static void main(String[] args) {
        LongestPalindromicSubstring lps = new LongestPalindromicSubstring();
        System.out.println(lps.longestPalindrome("cbbd"));    }

    public String longestPalindrome(String s) {
        String longest = "";
        for (int i = 0; i < s.length(); i++) {
            for (int j = i; j < s.length(); j++) {
                String sub = s.substring(i, j);
                if (sub.length() > longest.length() && sub.equals(new StringBuilder(sub).reverse().toString())) {
                    longest = sub;
                }
            }
        }
        return longest;
    }
}
