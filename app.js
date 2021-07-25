const locationName = document.querySelector(".location-name");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");

const input = document.querySelector(".location-search");
const options = {
  types: ["geocode"],
  fields: ["name", "geometry"],
};

const autocomplete = new google.maps.places.Autocomplete(input, options);
autocomplete.addListener("place_changed", onPlaceChanged);

function onPlaceChanged() {
  var place = autocomplete.getPlace();
  if (!place.geometry) {
    return;
  } else {
    locationName.textContent = place.name;

    const latitude = place.geometry.location.lat();
    const longitude = place.geometry.location.lng();

    const API = "";
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API}`;

    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const temp = data.main.temp;
        const icon = data.weather[0].icon;

        temperature.textContent = Math.round(temp) + "°C";
        weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@4x.png`;
      });
  }
}
