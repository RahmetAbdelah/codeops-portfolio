#list index=O(1)
#single loop=O(n)
#nested loop=O(n^2)
#dictionary lookup=O(1)
#binary search=O(log n)



import time


accounts_list = [f"acc_{i}" for i in range(100000)]
accounts_dict = {f"acc_{i}": i for i in range(100000)}

target = "acc_99999"

# List 
start = time.time()
found = target in accounts_list
end = time.time()
print("List lookup time:", end - start)

# Dict
start = time.time()
found = target in accounts_dict
end = time.time()
print("Dict lookup time:", end - start)


class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def peek(self):
        return self.items[-1] if self.items else None

names = ["Ali", "Sara", "abebe"]

stack = Stack()
for name in names:
    stack.push(name)

reversed_names = []
while stack.items:
    reversed_names.append(stack.pop())

print(reversed_names)



from collections import deque

queue = deque()

queue.append("Customer 1")
queue.append("Customer 2")
queue.append("Customer 3")
queue.append("Customer 4")
queue.append("Customer 5")


while queue:
    customer = queue.popleft()
    print("Serving:", customer)



class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def push_front(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def print_all(self):
        current = self.head
        while current:
            print(current.data)
            current = current.next

ll = LinkedList()
ll.push_front("A")
ll.push_front("B")
ll.push_front("C")

ll.print_all()