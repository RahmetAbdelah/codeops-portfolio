customer={}
try:
   with open('Telebirr-transactions.txt','r') as file:
      for line in file:
         name,amount=line.strip().split(",")
         customer[name]=int(amount)

         customer[name]=customer.get(amount,0)+amount

except FileNotFoundError:
   print("File not found")

else:
   print("file read sucessfully")

for i in range(len(amount)):
    for j in range(i + 1, len(amount)):
        if amount[j] > amount[i]:
            amount[i], amount[j] = amount[j], amount[i]


print("customer:")
for name,amount in customer.items():
   print(f"{name} : {amount}")


with open("Telebirr-transactions.txt", "w") as f:
   for name,amount in customer.items():
      f.write(f"{name},{amount}\n")