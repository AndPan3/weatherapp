import json
import pandas as pd

with open("data/weather1.json", "r") as file:
    data = json.load(file)

weathernow = data[0]

if weathernow['temperature_2m'] >= 25 and weathernow['apparent_temparature'] >= 25:
    if weathernow.weather_code in [0, 1, 2]:
        badiwetter = "true"
else:
    badiwetter="false"

if weathernow['rain'] >= 2:
    regenwetter="true"
else:
    regenwetter="false"

conditions = {
    "badi": badiwetter,
    "regen" : regenwetter
}
conditionsdataframe = pd.DataFrame(data = conditions)
file_path = 'data/conditions.json'
conditionsdataframe.to_json(file_path, orient="records", date_format="iso", indent=4)