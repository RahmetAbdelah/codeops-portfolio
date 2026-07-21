class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def peek(self):
        return self.items[-1] if self.items else None

# Use stack to reverse list
names = ["Ali", "Sara", "John"]

stack = Stack()
for name in names:
    stack.push(name)

reversed_names = []
while stack.items:
    reversed_names.append(stack.pop())

print(reversed_names)