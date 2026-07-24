# #question number 1
# num=[1,2,3,6,4,8]

# result=[]
# result2=[]

# # for i in num:
# #     if i%2==0:
# #        result.append(i)
# for j in range(len(num)):
#     if j%2==0:
#         if num[j]%2==0:
#             result2.append(num[j])
    
         
# print(result2)  


#question number 2


# def reverse_compare(num):
#     number=0;
   
#     while int(num>0):
#         remainder=num%10
#         number = (number* 10) + remainder
#         num=num//10

#     if number>num:
#         return "OK"
#     else :
#         return "not ok"

    

# print(reverse_compare(72))


#Question number 3

# def factorial(num):
#     if num==0:
#         return 1
#     else:
#         return num*factorial(num-1)

# print(factorial(5))


#question number4


def check_meera(arr):
    for n in arr:
        if n * 2 in arr:
            print("I am NOT a Meera array")
            return
    print("I am a Meera array")

check_meera([10,4,0,5])


#question number 5  
def isDual(arr):
    freq = {}
    for num in arr:
        freq[num] = freq.get(num, 0) + 1

    for count in freq.values():
        if count != 2:
            return 0

    return 1




#question number 6
def digitalClock(seconds):
    seconds = seconds % (24 * 3600)  # handle next day

    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    secs = seconds % 60

    return f"{hours:02d}:{minutes:02d}:{secs:02d}"