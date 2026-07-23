class Account:
    def __init__(self, owner, number, balance=0):
        self.owner = owner
        self.account_number = number
        self.__balance = balance  
    
    @property
    def balance(self):
        return self.__balance

 
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")
        self.__balance += amount

   
    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")
        if amount > self.__balance:
            raise ValueError("Not enough balance")
        self.__balance -= amount

    
    def statement(self):
        print("Owner:", self.owner)
        print("Account Number:", self.account_number)
        print("Balance:", self.__balance, "ETB")

class savingAccount(Account):
    def __init__(self,owner,number,balance=0,rate=0.05):
        super().__init__(owner,number,balance)
        self.rate=rate

    def add_interest(self):
        self.deposit(self.__balance*self.rate)


    def statement(self):
    
        super().statement()

class currentAccount(Account):
    def __init__(self,owner,number,balance=0,overdraft_limit=1000):
        super().__init__(owner,number,balance)
        self.overdraft_limit=overdraft_limit

    def withdraw(self,amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")
        if amount > self.__balance + self.overdraft_limit:
            raise ValueError("Not enough balance and overdraft limit exceeded")
        self.__balance -= amount

    def statement(self):
        super().statement()
        print("Overdraft Limit:", self.overdraft_limit, "ETB")



acc1=Account("Abebe","001",1200)
acc2=savingAccount("Kebede","002",2000,0.03)
acc3=currentAccount("Alemu","003",500,2000)

accounts=[acc1,acc2,acc3]

for acc in accounts:
    acc.statement()