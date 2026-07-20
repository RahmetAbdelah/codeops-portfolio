from abc import ABC,abstractmethod
class Vehicle:
    def __init__(self,make,model):
        self.make=make
        self.model=model
    @abstractmethod
    def decribe(self):
        pass


class car(Vehicle):
    pass
class Truck(Vehicle):
    def __init__(self,make,model,capacity):
        super().__init__(make,model)
        self.capacity=capacity
    def describe(self,make,model,capacity):
        print(f"the model we have is {model},and our capcity is {capacity},this is the current information")