package practice;

public class ArrayMax {
    public static void main(String[] args) {
        int[] arr = { 45, 4, 8, 9, 2, 8 };
        int max = arr[0];
        for (int i : arr) {
            if (i > max) {
                max = i;
            }
        }
        System.out.println("Maximum of array: " + max);
    }
}
