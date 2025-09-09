package practice;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class SeveralThread {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(3);
        for (int i = 0; i < 3; i++) {
            executor.submit(new Runnable() {
                @Override
                public void run() {
                    System.out.println("Hello from thread " + Thread.currentThread().getName());
                }
            });
        }
        executor.shutdown();
    }
}
