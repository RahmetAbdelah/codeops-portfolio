def apply_discount(price,percent=10):
    return price-price*(percent/100)

total=apply_discount(100)
print(total)