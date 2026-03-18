from Vehicle import Vehicle
class Truck(Vehicle):
    def __init__(self, brand, capacity):
        super().__init__(brand)
        self.capacity = capacity
        self.current_load = 0

    def load_cargo(self, weight):
        if self.current_load + weight <= self.capacity:
            self.current_load += weight
            print(f"Loaded {weight} kg. Current load: {self.current_load}")
        else:
            print("Over capacity!")

    def drive(self, distance):
        if self.is_running:
            fuel_needed = distance * 0.2
            if self.fuel_level >= fuel_needed:
                self.fuel_level -= fuel_needed
                print(f"Truck drove {distance} km with load {self.current_load}. Fuel left: {self.fuel_level}")
            else:
                print("Not enough fuel")
        else:
            print("Start the engine first")