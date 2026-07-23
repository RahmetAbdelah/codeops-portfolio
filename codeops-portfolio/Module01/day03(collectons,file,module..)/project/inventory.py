
stock = {}
try:
    with open("stock.txt") as f:
        for line in f:
            item, qty = line.strip().split(",")
            stock[item] = int(qty)
except FileNotFoundError:
    print("No stock file yet — starting empty")


def adjust(item, amount):
    stock[item] = stock.get(item, 0) + amount

adjust("paracetamol", 5)

low=[item for item,amount in stock.items() if amount<10]

print("Low stock items:", low)

with open("stock.txt", "w") as f:
    for item, qty in stock.items():
        f.write(f"{item},{qty}\n")