import json
with open("data/weather1.json", "r") as file:
    data = json.load(file)

weathernow = data[0]

if weathernow['temperature_2m'] >= 25 and weathernow['apparent_temperature'] >= 25:
    if weathernow['weather_code'] in [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0]:
        badiwetter = True
else:
    badiwetter=False

if weathernow['rain'] >= 2:
    regenwetter=True
else:
    regenwetter=False

conditions = {
    "badi": badiwetter,
    "regen" : regenwetter
}
with open('data/conditions.json', 'w') as f:
    json.dump(conditions, f, indent=4)
print(badiwetter)
print(weathernow['weather_code'])
print(f"{weathernow['temperature_2m']} , pppp {weathernow['apparent_temperature']}")