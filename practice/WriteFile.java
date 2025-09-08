package practice;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.util.Scanner;

public class WriteFile {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try (BufferedWriter bw = new BufferedWriter(new FileWriter("practice/output.txt"))) {
            for (int i = 0; i < 3; i++) {
                bw.append(sc.nextLine());
                bw.newLine();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        sc.close();
    }
}
