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

    def _adjust_balance(self, delta):
        """
        Protected hook for subclasses.

        __balance is name-mangled and private to Account, so a subclass
        can't touch it directly (self.__balance inside a subclass would
        refer to _Subclass__balance, not _Account__balance). This method
        gives subclasses a controlled way to change the balance (e.g. for
        interest or overdraft) without breaking encapsulation or duplicating
        the private attribute.
        """
        self.__balance += delta


class SavingsAccount(Account):
    def __init__(self, owner, number, balance=0, interest_rate=0.02):
        super().__init__(owner, number, balance)
        if interest_rate < 0:
            raise ValueError("Interest rate cannot be negative")
        self.interest_rate = interest_rate

    def apply_interest(self):
        interest = self.balance * self.interest_rate
        self._adjust_balance(interest)
        return interest

    def statement(self):
        super().statement()
        print("Account Type: Savings")
        print("Interest Rate:", self.interest_rate * 100, "%")


class CheckingAccount(Account):
    def __init__(self, owner, number, balance=0, overdraft_limit=1000):
        super().__init__(owner, number, balance)
        if overdraft_limit < 0:
            raise ValueError("Overdraft limit cannot be negative")
        self.overdraft_limit = overdraft_limit

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")
        if amount > self.balance + self.overdraft_limit:
            raise ValueError("Withdrawal exceeds overdraft limit")
        self._adjust_balance(-amount)

    def statement(self):
        super().statement()
        print("Account Type: Checking")
        print("Overdraft Limit:", self.overdraft_limit, "ETB")


class BusinessAccount(CheckingAccount):
    def __init__(self, owner, number, balance=0, overdraft_limit=5000, monthly_fee=100):
        super().__init__(owner, number, balance, overdraft_limit)
        if monthly_fee < 0:
            raise ValueError("Monthly fee cannot be negative")
        self.monthly_fee = monthly_fee

    def charge_monthly_fee(self):
        if self.balance + self.overdraft_limit < self.monthly_fee:
            raise ValueError("Not enough balance/overdraft to cover monthly fee")
        self._adjust_balance(-self.monthly_fee)

    def statement(self):
        super().statement()
        print("Monthly Fee:", self.monthly_fee, "ETB")


if __name__ == "__main__":
    print("--- Savings ---")
    sav = SavingsAccount("Abebe", "SA-001", 1000, interest_rate=0.05)
    sav.deposit(500)
    sav.apply_interest()
    sav.statement()

    print("\n--- Checking ---")
    chk = CheckingAccount("Sara", "CH-001", 200, overdraft_limit=300)
    chk.withdraw(400)  # dips into overdraft
    chk.statement()

    print("\n--- Business ---")
    biz = BusinessAccount("Kebede & Sons", "BZ-001", 2000)
    biz.charge_monthly_fee()
    biz.statement()