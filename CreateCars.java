


import java.util.ArrayList;

public class CreateCars {
    public static void main(String[] args) {
        ArrayList<Car> cars = new ArrayList<>();
        cars.add(new Car("Toyota", 2015, 50000));
        cars.add(new ElectricCar("Tesla", 2018, 10000, 100));
        cars.get(0).drive(100);
        cars.get(1).drive(100);
        System.out.println(cars.get(0));
        System.out.println(cars.get(1));
    }
}
