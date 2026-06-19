async function weatherfetch(){
const response= await fetch(data/weather1.json)
const data = await response.json()
return data
}

const fetched = await weatherfetch()
const weathernow = fetched[0];
const tempnow = Math.round(weathernow.temperature_2m);
const apptempnow = Math.round(weathernow.apparent_temperature);
const codenow = weathernow.weather_code;
const snowfallnow = Math.round(weathernow.snowfall);
const snowdepthnow = Math.round(weathernow.snow_depth);
const rainnow = Math.round(weathernow.rain);
const windnow = Math.round(weathernow.wind_speed_10m);
const imgow = `https://openweathermap.org/img/wn/${codenow}@2x.png`;

const weather1h = fetched[1];
const temp1h = Math.round(weather1h.temperature_2m);
const code1h = weather1h.weather_code;
const img1h = `https://openweathermap.org/img/wn/${code1h}@2x.png`;

const weather2h = fetched[2];
const temp2h = Math.round(weather2h.temperature_2m);
const code2h = weather2h.weather_code;
const img2h = `https://openweathermap.org/img/wn/${code2h}@2x.png`;

const weather3h = fetched[3];
const temp3h = Math.round(weather3h.temperature_2m);
const code3h = weather3h.weather_code;
const img3h = `https://openweathermap.org/img/wn/${code3h}@2x.png`;

const weather4h = fetched[4];
const temp4h = Math.round(weather4h.temperature_2m);
const code4h = weather4h.weather_code;
const img4h = `https://openweathermap.org/img/wn/${code4h}@2x.png`;

const weather5h = fetched[5];
const temp5h = Math.round(weather5h.temperature_2m);
const code5h = weather5h.weather_code;
const img5h = `https://openweathermap.org/img/wn/${code5h}@2x.png`;

const weather6h = fetched[6];
const temp6h = Math.round(weather6h.temperature_2m);
const code6h = weather6h.weather_code;
const img6h = `https://openweathermap.org/img/wn/${code6h}@2x.png`;

const weather7h = fetched[7];
const temp7h = Math.round(weather7h.temperature_2m);
const code7h = weather7h.weather_code;
const img7h = `https://openweathermap.org/img/wn/${code7h}@2x.png`;

