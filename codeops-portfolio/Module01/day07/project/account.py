class Account:
    def __init__(self, owner, number , balance=0):
        self.owner = owner
        self.account_number = number
        self.balance = balance
        self.history = []  

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")

        self.balance += amount
        self.history.append(("deposit", amount))  

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")

        if amount > self.balance:
            raise ValueError("Not enough balance")

        self.balance -= amount
        self.history.append(("withdraw", amount))  

        
    def undo_last(self):
        if not self.history:
            print("No transactions to undo")
            return

        action, amount = self.history.pop()  # pop from stack

        if action == "deposit":
            self.balance -= amount
            print("Undo deposit:", amount)

        elif action == "withdraw":
            self.balance += amount
            print("Undo withdraw:", amount)