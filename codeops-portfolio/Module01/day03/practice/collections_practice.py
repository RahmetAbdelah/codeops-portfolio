#dictionaries
    customer={
        "name":"Almaz bekele",
        "balance":1500,
        "city":"addis Ababa"
    }

    customer["name"]
    customer["balance"]=2000
    customer.get("phone","not found")

    prices={
        "Bread":50,
        "milk":80,
        "egg":120,
    }
    for item,price in prices.items():
        print(f"{item}:{price} ETB ")  

    print(prices.values())
