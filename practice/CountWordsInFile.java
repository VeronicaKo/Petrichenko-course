package practice;

import java.io.BufferedReader;
import java.io.FileReader;

public class CountWordsInFile {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new FileReader("practice/input.txt"));) {
            int count = 0;
            String line;
            while ((line = br.readLine()) != null) {
                count += line.split("\\s+").length;
            }
            System.out.println(count);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
