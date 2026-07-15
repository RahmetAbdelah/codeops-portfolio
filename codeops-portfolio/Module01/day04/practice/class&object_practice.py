class Account:
    def __init__(self,owner,balance):
        self.owner=owner
        self.balance=balance

    def deposit(self,amount):
        self.balnace+=amount
    def statement(self):
        print(f"{self.owner}:{self.balance} ETB")    
almaz=Account("Almaz",1200)
almaz.deposit(500)
almaz.statement()
print(almaz.balance)