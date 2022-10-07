let now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  " Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let dayChange = document.querySelector("#day");
let timeChange = document.querySelector("#time");
dayChange.innerHTML = `${day}`;
timeChange.innerHTML = `${hour}:${minutes}`;

let apiKey = "ce144f0cf51fa43f03431f0488a36728";

function temp(response) {
  let temperature = document.querySelector("#number-temperature");
  console.log(response.data.main.temp);
  let changeTemperature = Math.round(response.data.main.temp);
  temperature.innerHTML = changeTemperature;
  let changeDescription = document.querySelector("#description");
  changeDescription.innerHTML = response.data.weather[0].main;
  let city = document.querySelector("h1");
  city.innerHTML = response.data.name;
}
function citySearch(event) {
  event.preventDefault();
  let changeCity = document.querySelector("h1");
  let cityEnter = document.querySelector("#enter-city");
  changeCity.innerHTML = `${cityEnter.value}`;
  let apiKey = "ce144f0cf51fa43f03431f0488a36728";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityEnter.value}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(temp);
}

let cityForm = document.querySelector("#form-search-city");
cityForm.addEventListener("submit", citySearch);

function usePosition(position) {
  let apiKey = "ce144f0cf51fa43f03431f0488a36728";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiCallW = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiCallW).then(temp);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(usePosition);
}

let currentPosition = document.querySelector("#geo-item");
currentPosition.addEventListener("click", getCurrentPosition);
