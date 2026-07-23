try:
   with open('Telebirr-transactions.txt','r') as file:
      for line in file:
        print( line.strip())
except FileNotFoundError:
   print("File not found")

else:
   print("file read sucessfully")

finally:
   print("file operation done")



customer={}