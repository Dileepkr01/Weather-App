const apikey = "8471c8dde2684b72a62190942241412";
// const apiUrl = "https://api.weatherapi.com/v1/current.json?&q=india";
const apiUrl =
  "https://api.weatherapi.com/v1/current.json?key=8471c8dde2684b72a62190942241412&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.location.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.current.temp_c) + "°c";
  document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
  document.querySelector(".wind").innerHTML = data.current.wind_kph + "km/h";

//   if (data.current[0].icon == "Clouds") {
//     weatherIcon.src = "images/clouds.png";
//   } else if (data.current[0].icon == "clear") {
//     weatherIcon.src = "images/clear.png";
//   } else if (data.current[0].icon == "Rain") {
//     weatherIcon.src = "images/rain.png";
//   } else if (data.current[0].icon == "Drizzle") {
//     weatherIcon.src = "images/drizzle.png";
//   } else if (data.current[0].icon == "Mist") {
//     weatherIcon.src = "images/mist.png";
//   }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
