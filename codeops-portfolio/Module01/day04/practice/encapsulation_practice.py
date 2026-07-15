#getter and setter

class Account:
    def __init__(self,balance):
        self.__balance=balance
    def withdraw(self,amount):
        if amount>self.__balance:
            print("Insufficient funds")
            return
        self.__balance -= amount
