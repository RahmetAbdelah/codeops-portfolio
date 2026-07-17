# class Product:
#     def __init__(self,price,quantity):
#         self.price=price
#         self.quantity=quantity
#     def restock(self,n):
#         self.quantity+=n
#         return self.quantity
#     def sell(self,n):
#         if n>self.quantity:
#             return "not enough in stock"
#         self.quantity-=n
#         return self.quantity




class Product:
    def __init__(self,name,price,quantity):
        self.name=name
        self.price=price
        self.__quantity=quantity

    @property
    def quantity(self):
        return self.__quantity
    @quantity.setter
    def quantity(self,value):
        if value<0:
            print("quantity can not be less than zero")
        else:
            self.__quantity=value    
    def restock(self,n):
        self.__quantity+=n
        return self.quantity
    def sell(self,n):
        if n>self.__quantity:
            return "not enough in stock"
        self.__quantity-=n
        return self.quantity
    

p1=Product("phone",1000,1)
p2=Product("laptop",2000,3)
p3=Product("desktop",300,3)


print(p1.sell(5))
print(p2.restock(3))
print(p1.price)