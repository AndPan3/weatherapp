import json


with open("data/weather1.json", "r") as file:
    data = json.load(file)

print(data)