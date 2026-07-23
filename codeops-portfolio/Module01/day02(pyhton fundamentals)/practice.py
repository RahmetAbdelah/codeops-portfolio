#exercises
#Q#1
temprature=int(input("enter the temprature in celcius"))

if temprature<15:
    print("Cold")
elif temprature>=15 and temprature<=28:
    print("warm")
else:
    print("hot")


#Q#2

for i in range (1,10):
    print(f"Reciet number #{i}")



count =10;
while count>0:
   print(f"reciet number #{count}")
   count-=1

#q3

for i in range(1,21):
    if i%2==0:
        print(i)  


#q4

def apply_discount(price,percent=10):
    return price-price*(percent/100)

total=apply_discount(100)
print(total)
      


#q5
count=5 
while count>0:
    print(count)
    print("liftoff")
    count-=1 