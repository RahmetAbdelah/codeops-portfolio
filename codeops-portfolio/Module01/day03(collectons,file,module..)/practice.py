cities=["Addis Ababa","harar", "Jimma","harar","bahirdar","mekele","Jimma"]

Distnict=set(cities)
print(Distnict)

grocery={"milk":50,
         "bread":10,
         "onion":100,
         "tomato":90,
         "potato":150}

for item,price in grocery.items():
    print(f"{item} :{price} \n")




prices = [100, 250, 400, 80]

with_tax=[p*1.15 for p in prices ]
cheap=[p for p in prices if p<200 ]




with open("names.txt") as f:
    for line in f:
       print(line.strip())




try:
 number=input("enter a number")
 div=number/1000 

except ValueError:
  print("Please enter a number")
except ZeroDivisionError:
 print("Amount can't be zero")
else:
   print(div)
finally:
   print("done")