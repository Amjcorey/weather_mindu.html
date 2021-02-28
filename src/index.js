//Date & Time

function formatDate(date) {
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hour}:${minutes}`;
}
// console.log(localDate);
// console.log(formatDate);


//Week 5

function showWeatherConditions(response){
 console.log(response.data);
 document.querySelector("#current-city").innerHTML = response.data.name;
 document.querySelector("#temperature").innerHTML = Math.round(response.data.temp);

 //Humidity
 document.querySelector("#humidity").innerHTML = response.data.main.humidity;

 //Wind
 document.querySelector("#wind-speed").innerHTML = Math.round(response.data.main.wind);

 //Description
 document.querySelector("#description").innerHTML = response.data.weather[0].main;
}

//Search City
function searchCity(city) {
let apiKey = "70de72ce25d0801c193edd1d17ced422";
let apiEndPoint = `https://api.openweathermap.org/data/2.5/weatherq=?$`;
let apiUrl = `${apiEndPoint}${city}&appid=${apiKey}`;
axios.get(apiUrl).then(showWeatherConditions);
}

//Dispaly City
function handleSubmit(event) {
event.preventDefault(); 
let city = document.querySelector("#city-input").value;
search(city);
}

//Search Location
function searchLocation(position){
  let apiKey = "70de72ce25d0801c193edd1d17ced422";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
    position.coords.latitude
  }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherConditions);
}

//Current Location
function getCurrentLocation(event) {
event.preventDefault();
navigator.geolocation.getCurrentPosition(searchLocation);
}

//Farhenheit and Celcius
function convertFahrenheit(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = `32`;
}

function convertCelsius(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = `19`;
}

//Current Time
let date = document.querySelector("#current-date");
let currentTime = new Date();
date.innerHTML = formatDate(localDate);

//Current Location Button Event
let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

search("New York");