from abc import ABC,abstractmethod   
class Account:
    def __init__(self,owner,balance,rate,type=None):
        self.owner=owner
        self.balance=balance
        self.rate=rate
        self.type=type
    def deposit(self,amount):
        return self.balance+amount
    @abstractmethod
    def statement(self):
        pass
        # if type=="saving":
        #     return self.balance+self.balance*self.rate
        # else:
        #     return self.balance
    


class savingAccount(Account):
    def __init__(self,owner,balance,rate,type):
        super().__init__(owner,balance,rate,type)
    def statement(self):
        if type == "saving":
          return self.balance + self.balance*self.rate
        else:
          return self.balance


class checkingAccount(Account):
    def __init__(self,owner,balance,rate):
        super().__init__(owner,balance,rate)
    def statement(self):
        return self.balance

Abebe=savingAccount("Abebe",2000,0.5,"saving")

print(Abebe.statement())