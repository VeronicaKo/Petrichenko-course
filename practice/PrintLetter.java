package practice;

public class PrintLetter extends Thread {
    @Override
    public void run() {
        for (char c = 'A'; c <= 'E'; c++) {
            System.out.println(c);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        PrintNumbers thread1 = new PrintNumbers();
        thread1.start();

        PrintLetter thread2 = new PrintLetter();
        thread2.start();
    }

}
