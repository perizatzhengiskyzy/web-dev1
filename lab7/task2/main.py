from lab7.task2.Vehicle import Vehicle
from lab7.task2.Truck import Truck
from lab7.task2.ElectricCar import ElectricCar
def main():
    v = Vehicle("Toyota", 60)
    t = Truck("Volvo", 1000)
    e = ElectricCar("Tesla", 80)
    vehicles = [v, t, e]
    for vehicle in vehicles:
        print(vehicle)
        vehicle.start_engine()
        vehicle.drive(50)
    print("\nPolymorphism demo:")
    for vehicle in vehicles:
        vehicle.drive(30)
    t.load_cargo(500)
    e.charge()
if __name__ == "__main__":
    main()