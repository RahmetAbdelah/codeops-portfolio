#  Singleton: 
class BankConfig:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.interest_rate = 0.05
            cls._instance.overdraft_limit = 1000
        return cls._instance


# Base Account
class Account:
    def __init__(self, owner, number, balance=0):
        self.owner = owner
        self.number = number
        self._balance = balance
        self._observers = []   # list of observers

    @property
    def balance(self):
        return self._balance

    # ✅ Observer: subscribe
    def subscribe(self, observer):
        self._observers.append(observer)

    # ✅ Observer: notify
    def _notify(self, message):
        for obs in self._observers:
            obs.update(message)

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")
        self._balance += amount
        self._notify(f"{self.owner} deposited {amount}")

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")
        if amount > self._balance:
            raise ValueError("Not enough balance")
        self._balance -= amount
        self._notify(f"{self.owner} withdrew {amount}")

    def statement(self):
        print("Owner:", self.owner)
        print("Number:", self.number)
        print("Balance:", self._balance)


# 🔵 Savings Account
class SavingsAccount(Account):
    def __init__(self, owner, number, balance=0):
        super().__init__(owner, number, balance)
        config = BankConfig()
        self.rate = config.interest_rate

    def add_interest(self):
        interest = self.balance * self.rate
        self.deposit(interest)

    def statement(self):
        print("=== Savings Account ===")
        super().statement()


# 🔵 Current Account
class CurrentAccount(Account):
    def __init__(self, owner, number, balance=0):
        super().__init__(owner, number, balance)
        config = BankConfig()
        self.overdraft = config.overdraft_limit

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")

        if amount > self.balance + self.overdraft:
            raise ValueError("Overdraft exceeded")

        self._balance -= amount
        self._notify(f"{self.owner} withdrew {amount} (overdraft allowed)")

    def statement(self):
        print("=== Current Account ===")
        super().statement()
        print("Overdraft:", self.overdraft)


# 🔵 Factory
class AccountFactory:
    @staticmethod
    def create(kind, owner, number, balance=0):
        if kind == "savings":
            return SavingsAccount(owner, number, balance)
        elif kind == "current":
            return CurrentAccount(owner, number, balance)
        else:
            raise ValueError("Unknown account type")


# 🔵 Observers
class SMSAlert:
    def update(self, message):
        print("[SMS ALERT]:", message)


class AuditLog:
    def update(self, message):
        print("[AUDIT LOG]:", message)