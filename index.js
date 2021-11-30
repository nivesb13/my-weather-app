let dateElement = document.querySelector("#date");
let currentTime = new Date();
let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let dayIndex = currentTime.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let dateIndex = currentTime.getDate();
let month = currentTime.getMonth();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let year = currentTime.getFullYear();

function search(event) {
  event.preventDefault();
  let input = document.querySelector("#city-input");

  let location = document.querySelector("#city");
  if (input.value) {
    location.innerHTML = `${input.value}`;
  } else {
    location.innerHTML = null;
    alert("Please type in a city");
  }

  let city = document.querySelector("#city-input").value;
  let apiKey = "fdaa0bb1bbe3059f740bdeb5180d2b46";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

let lookUp = document.querySelector("#search-form");
lookUp.addEventListener("submit", search);

function showTemperature(response) {
  console.log(response.data.main.temp);
  let newTemp = document.querySelector("#temperature");
  newTemp.innerHTML = `${response.data.main.temp}°C`;
}

function yourPosition(position) {
  let apiKey = "fdaa0bb1bbe3059f740bdeb5180d2b46";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}%lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showTemperature);
}
function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(yourPosition);
}