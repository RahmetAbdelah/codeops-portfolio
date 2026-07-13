

def split_bill(total,people,tip_rate=0.10):
    per_person=(total+(total*tip_rate))/people
    return per_person


money=int(input("enter the amount of money"))
person=int(input("enter the number of people"))
names=[]

#for i in range(person):
 #  input(f"enter person number {i}"



print(split_bill(money,person))