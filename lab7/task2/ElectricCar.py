from lab7.task2.Vehicle import Vehicle


class ElectricCar(Vehicle):
    def __init__(self, brand , battery_health):
        super().__init__(brand, fuel_level=battery_health)
        self.is_charging = False
    def charge(self):
        self.is_charging = True
        print(f"{self.brand} is charging")
    def drive(self, distance):
        if(self.is_charging):
            print(f"{self.brand} is charging. Cannot drive!")
            return
        if self.is_running:
            battery_needed = distance * 0.05
            if self.fuel_level >= battery_needed:
                self.fuel_level -= battery_needed
                print(f"{self.brand} drove {distance} km. Battery left: {self.fuel_level}")
            else:
                print(f"{self.brand} does not have enough battery")
        else:
            print("Start the car first")
