package practice;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamMap {
    public static void main(String[] args) {
        List<String> str = Arrays.asList("java", "python", "js");
        List<String> strUpperCase = str.stream().map(String::toUpperCase).collect(Collectors.toList());
        System.out.println(strUpperCase);
    }
}
