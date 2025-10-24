//! api link     https://www.weatherapi.com/
//todo #homework AŞağıda her bir prosesi funksiya halına gətirmək (Ex updateCity)

// https://api.weatherapi.com/v1/current.json?key=7491f5f1cad248eb93d200324250309&q=London&aqi=no&lang=tr

const baseUrl = "https://api.weatherapi.com/v1/current.json";
const apiKey = "7491f5f1cad248eb93d200324250309";

document.querySelector("#search-btn").addEventListener("click", handleSearch);

async function fetchWeather(city) {
  const url = `${baseUrl}?key=${apiKey}&q=${city}&aqi=no&lang=tr`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

async function handleSearch() {
  const inputValue = document.querySelector("#city-input").value.trim();
  document.querySelector("#city-input").value = "";

  if (inputValue == "") {
    alert("Deyer duzgun deil");
    return;
  }

  const response = await fetchWeather(inputValue);

  updateCity(response.location.name);

  document.querySelector("#country").innerText = response.location.country;

  document.querySelector("#temp").innerText =
    Math.round(response.current.temp_c) + " °C";

  document.querySelector("#condition-text").innerText =
    response.current.condition.text;

  document.querySelector(
    "#condition-icon"
  ).src = `https:${response.current.condition.icon}`;
}

function updateCity(city) {
  document.querySelector("#city").innerText = city;
}
