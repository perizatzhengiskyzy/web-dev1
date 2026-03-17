class Vehicle:
    def __init__(self,brand , fuel_level=50 ):
        self.brand = brand
        self.fuel_level = fuel_level
        self.is_running = False
    def __str__(self):
        return f"{self.brand}, Fuel: {self.fuel_level}"
    def start_engine(self):
        if self.fuel_level>0:
            self.is_running = True
            print(f"Engine {self.brand} is starting")
        else:
            print(f"Engine {self.brand} is not running")
    def drive(self , distance):
       if(self.is_running):
           fuel_needed = distance * 0.1
           if (self.fuel_level >= fuel_needed):
               self.fuel_level -= fuel_needed
               print(f"Traveled {distance} km. Fuel remaining: {self.fuel_level}")
           else:
               print(f"Fuel is not enough")
       else:
           print("Start the engine first")

