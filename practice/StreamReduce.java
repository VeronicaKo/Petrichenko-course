package practice;

import java.util.Arrays;
import java.util.List;

public class StreamReduce {
    public static void main(String[] args) {
        List<Integer> arr = Arrays.asList(5, 10, 15, 20);
        System.out.println(arr.stream().reduce((sum, i )-> sum + i).get());
    }
}
