package practice;

public class PrintNumbers extends Thread {
    @Override
    public void run() {
        for (int i = 1; i < 6; i++) {
            System.out.println(i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        PrintNumbers thread = new PrintNumbers();
        thread.start();
    }
}
