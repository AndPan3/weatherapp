import json


with open("data/weather1.json", "r") as file:
    data = json.load(file)

weathernow = data[0]

if weathernow.temparature_25 >= 26 and weathernow.apparent_temparature >= 25:
    if weathernow.weather_code in [0, 1, 2]:
        badiwetter = "true"
else:
    badiwetter="false"

if weathernow.rain >= 2:
    regenwetter="true"
else:
    regenwetter="false"

conditions = {
    "badi": badiwetter,
    "regen" : regenwetter
}

print(conditions)