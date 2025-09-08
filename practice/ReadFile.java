package practice;

import java.io.BufferedReader;
import java.io.FileReader;

public class ReadFile {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new FileReader("practice/input.txt"))) {
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
