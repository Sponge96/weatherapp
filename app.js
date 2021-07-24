const temperature = document.querySelector("[data-temperature]")
const locationName = document.querySelector("[data-location]");
const icon = document.querySelector("[data-icon]")
const input = document.querySelector("[data-city-search]");
const autocomplete = new google.maps.places.Autocomplete(input);

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
        console.log(data);
        temperature.textContent = Math.round(data.main.temp)
      });
  }
}
