

def split_bill(total,people,tip_rate=0.10):
    per_person=(total+(total*tip_rate))/people
    return per_person


money=int(input("enter the amount of money"))
person=int(input("enter the number of people"))
names=[]

result=split_bill(money,person)

for i in range(person):
  print(f"person {i+1} ows {result}")

