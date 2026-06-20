async function weatherfetch(){
const response = await fetch("data/weather1.json")
const data = await response.json()
return data
}

const fetched = await weatherfetch()
const weathernow = fetched[0];
const tempnow = Math.round(weathernow.temperature_2m);
const codenow = weathernow.weather_code;
const snowfallnow = Math.round(weathernow.snowfall);
const snowdepthnow = Math.round(weathernow.snow_depth);
const rainnow = Math.round(weathernow.rain);
const windnow = Math.round(weathernow.wind_speed_10m);

const weather1h = fetched[1];
const temp1h = Math.round(weather1h.temperature_2m);
const code1h = weather1h.weather_code;

const weather2h = fetched[2];
const temp2h = Math.round(weather2h.temperature_2m);
const code2h = weather2h.weather_code;

const weather3h = fetched[3];
const temp3h = Math.round(weather3h.temperature_2m);
const code3h = weather3h.weather_code;

const weather4h = fetched[4];
const temp4h = Math.round(weather4h.temperature_2m);
const code4h = weather4h.weather_code;

const weather5h = fetched[5];
const temp5h = Math.round(weather5h.temperature_2m);
const code5h = weather5h.weather_code;

const weather6h = fetched[6];
const temp6h = Math.round(weather6h.temperature_2m);
const code6h = weather6h.weather_code;

const weather7h = fetched[7];
const temp7h = Math.round(weather7h.temperature_2m);
const code7h = weather7h.weather_code;

const htmltempnow = document.getElementById("tempnow")
const htmlrainnow = document.getElementById("rainnow")
const htmlsnowfallnow = document.getElementById("snowfallnow")
const htmlsnowdepthnow = document.getElementById("snowdepthnow")
const htmlwindnow = document.getElementById("windnow")

const htmltemp1h = document.getElementById("temp1h")
const htmltemp2h = document.getElementById("temp2h")
const htmltemp3h = document.getElementById("temp3h")
const htmltemp4h = document.getElementById("temp4h")
const htmltemp5h = document.getElementById("temp5h")
const htmltemp6h = document.getElementById("temp6h")
const htmltemp7h = document.getElementById("temp7h")

if (snowfallnow = 0){
    htmlsnowfallnow.textContent = "Kein Schnefall"
} else{
    htmlsnowfallnow.textContent = snowfallnow}

htmltempnow.textContent = tempnow + "C°"
htmlrainnow.textContent = rainnow + " mm"
htmlsnowdepthnow.textContent = snowdepthnow
htmlwindnow.textContent = windnow

htmltemp1h.textContent = temp1h + "C°"
htmltemp2h.textContent = temp2h + "C°"
htmltemp3h.textContent = temp3h + "C°"
htmltemp4h.textContent = temp4h + "C°"
htmltemp5h.textContent = temp5h + "C°" 
htmltemp6h.textContent = temp6h + "C°"
htmltemp7h.textContent = temp7h + "C°"