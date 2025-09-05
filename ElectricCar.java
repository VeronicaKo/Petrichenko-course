


public class ElectricCar extends Car {
    private int batteryCapacity;

    public ElectricCar(String brand, int year, int mileage, int batteryCapacity) {
        super(brand, year, mileage);
        this.batteryCapacity = batteryCapacity;
    }

    @Override
    public void drive(int km) {
        super.drive(km);
        this.batteryCapacity -= Math.max(0, this.batteryCapacity - km / 10);;
    }
    @Override
    public String toString() {
        return getBrand() + " (" + getYear() + "), mileage=" + getMileage() + ", battery=" + batteryCapacity + "%";
    }
}
