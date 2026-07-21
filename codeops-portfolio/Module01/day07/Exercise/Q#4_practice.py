from collections import deque

queue = deque()

# Enqueue customers
queue.append("Customer 1")
queue.append("Customer 2")
queue.append("Customer 3")
queue.append("Customer 4")
queue.append("Customer 5")

# Serve customers
while queue:
    customer = queue.popleft()
    print("Serving:", customer)