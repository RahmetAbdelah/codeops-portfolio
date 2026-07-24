# Build report
class ReportBuilder:
    def build(self):
        return "Report data"


# Save report
class ReportSaver:
    def save(self, content):
        print("Saving report:", content)


# Email report
class ReportEmailer:
    def send(self, content):
        print("Emailing report:", content)








import math

class Shape:
    def area(self):
        pass


class Circle(Shape):
    def __init__(self, r):
        self.r = r

    def area(self):
        return math.pi * self.r * self.r


class Square(Shape):
    def __init__(self, s):
        self.s = s

    def area(self):
        return self.s * self.s


class Triangle(Shape):
    def __init__(self, b, h):
        self.b = b
        self.h = h

    def area(self):
        return 0.5 * self.b * self.h
    






class AppSettings:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.currency = "ETB"
        return cls._instance
    







class ShapeFactory:
    @staticmethod
    def create(kind):
        if kind == "circle":
            return Circle(1)
        elif kind == "square":
            return Square(1)
        elif kind == "triangle":
            return Triangle(1, 1)
        else:
            raise ValueError("Unknown shape")
        








class NewsAgency:
    def __init__(self):
        self.subscribers = []

    def subscribe(self, sub):
        self.subscribers.append(sub)

    def notify(self, news):
        for s in self.subscribers:
            s.update(news)