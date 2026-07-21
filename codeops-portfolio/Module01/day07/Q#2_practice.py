import time

# Create data
accounts_list = [f"acc_{i}" for i in range(100000)]
accounts_dict = {f"acc_{i}": i for i in range(100000)}

target = "acc_99999"

# List lookup
start = time.time()
found = target in accounts_list
end = time.time()
print("List lookup time:", end - start)

# Dict lookup
start = time.time()
found = target in accounts_dict
end = time.time()
print("Dict lookup time:", end - start)