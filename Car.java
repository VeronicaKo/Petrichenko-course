


public class Car {
    private String brand;
    private int year;
    private int mileage;

    public Car(String brand, int year, int mileage) {
        this.brand = brand;
        this.year = year;
        this.mileage = mileage;
    }

    @Override
    public String toString() {
        return brand + " (" + year + "), mileage=" + mileage;
    }

    public void drive(int km) {
        this.mileage += km;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public void setMileage(int mileage) {
        this.mileage = mileage;
    }

    public String getBrand() {
        return brand;
    }

    public int getMileage() {
        return mileage;
    }

    public int getYear() {
        return year;
    }
}
