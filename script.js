const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6d64632ef8mshb29270735341be4p1b273cjsna7d558312a6c",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const Weather = (city) => {
  document.getElementById("cityname").innerHTML = city;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      document.getElementById("cloud_pct").innerHTML = response.cloud_pct;
      document.getElementById("feels_like").innerHTML = response.feels_like;
      document.getElementById("humidity").innerHTML = response.humidity;
      document.getElementById("max_temp").innerHTML = response.max_temp;
      document.getElementById("min_temp").innerHTML = response.min_temp;
      document.getElementById("sunrise").innerHTML = response.sunrise;
      document.getElementById("sunset").innerHTML = response.sunset;
      document.getElementById("temp").innerHTML = response.temp;
      document.getElementById("wind_degrees").innerHTML = response.wind_degrees;
      document.getElementById("wind_speed").innerHTML = response.wind_speed;
    })
    .catch((error) => console.log(error));
};
const submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  Weather(city.value);
});

Weather("Delhi");
