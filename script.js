async function weatherfetch(){
const response= await fetch(data/weather1.json)
const data = await response.json()
return data
}

const fetched = await weatherfetch()
const weathernow = fetched[0];
const tempnow = Math.round(weathernow.temperature_2m);
const apptempnow = Math.round(weathernow.apparent_temperature);
const codenow = Math.round(weathernow.weather_code);
const snowfallnow = Math.round(weathernow.snowfall);
const snowdepthnow = Math.round(weathernow.snow_depth);
const rainnow = Math.round(weathernow.rain);
const windnow = Math.round(weathernow.wind_speed_10m);

const weather1h = fetched[1];
const temp1h = Math.round(weather1h.temperature_2m);
const apptemp1h = Math.round(weather1h.apparent_temperature);
const code1h = Math.round(weather1h.weather_code);
const snowfall1h = Math.round(weather1h.snowfall);
const snowdepth1h = Math.round(weather1h.snow_depth);
const rain1h = Math.round(weather1h.rain);
const wind1h = Math.round(weather1h.wind_speed_10m);

const weather2h = fetched[2];
const temp2h = Math.round(weather2h.temperature_2m);
const apptemp2h = Math.round(weather2h.apparent_temperature);
const code2h = Math.round(weather2h.weather_code);
const snowfall2h = Math.round(weather2h.snowfall);
const snowdepth2h = Math.round(weather2h.snow_depth);
const rain2h = Math.round(weather2h.rain);
const wind2h = Math.round(weather2h.wind_speed_10m);

const weather3h = fetched[3];
const temp3h = Math.round(weather3h.temperature_2m);
const apptemp3h = Math.round(weather3h.apparent_temperature);
const code3h = Math.round(weather3h.weather_code);
const snowfall3h = Math.round(weather3h.snowfall);
const snowdepth3h = Math.round(weather3h.snow_depth);
const rain3h = Math.round(weather3h.rain);
const wind3h = Math.round(weather3h.wind_speed_10m);

const weather4h = fetched[4];
const temp4h = Math.round(weather4h.temperature_2m);
const apptemp4h = Math.round(weather4h.apparent_temperature);
const code4h = Math.round(weather4h.weather_code);
const snowfall4h = Math.round(weather4h.snowfall);
const snowdepth4h = Math.round(weather4h.snow_depth);
const rain4h = Math.round(weather4h.rain);
const wind4h = Math.round(weather4h.wind_speed_10m);

const weather5h = fetched[5];
const temp5h = Math.round(weather5h.temperature_2m);
const apptemp5h = Math.round(weather5h.apparent_temperature);
const code5h = Math.round(weather5h.weather_code);
const snowfall5h = Math.round(weather5h.snowfall);
const snowdepth5h = Math.round(weather5h.snow_depth);
const rain5h = Math.round(weather5h.rain);
const wind5h = Math.round(weather5h.wind_speed_10m);

const weather6h = fetched[6];
const temp6h = Math.round(weather6h.temperature_2m);
const apptemp6h = Math.round(weather6h.apparent_temperature);
const code6h = Math.round(weather6h.weather_code);
const snowfall6h = Math.round(weather6h.snowfall);
const snowdepth6h = Math.round(weather6h.snow_depth);
const rain6h = Math.round(weather6h.rain);
const wind6h = Math.round(weather6h.wind_speed_10m);

const weather7h = fetched[7];
const temp7h = Math.round(weather7h.temperature_2m);
const apptemp7h = Math.round(weather7h.apparent_temperature);
const code7h = Math.round(weather7h.weather_code);
const snowfall7h = Math.round(weather7h.snowfall);
const snowdepth7h = Math.round(weather7h.snow_depth);
const rain7h = Math.round(weather7h.rain);
const wind7h = Math.round(weather7h.wind_speed_10m);