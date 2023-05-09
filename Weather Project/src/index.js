function showTime() {
  let current = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[current.getDay()];
  let hour = current.getHours();
  let minute = current.getMinutes();
  let time = document.querySelector("#show-time");
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  time.innerHTML = `${day} ${hour}:${minute}`;
}
showTime();

function search(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#city-enter");
  searchCity(citySearch.value);
}

function searchCity(city) {
  let apiKey = `5da7b2dc058f07286fea39c4cee516a3`;
  let apiEnd = `https://api.openweathermap.org/data/2.5/weather?`;
  let unit = `metric`;
  let apiUrl = `${apiEnd}q=${city}&appid=${apiKey}&units=${unit}`;

  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${response.data.name}`;
  let tempNum = Math.round(response.data.main.temp);
  let tempShow = document.querySelector("#temp");
  tempShow.innerHTML = `${tempNum}℃`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
