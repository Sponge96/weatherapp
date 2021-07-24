const input = document.querySelector("[data-city-search]");
const autocomplete = new google.maps.places.Autocomplete(input);

autocomplete.addListener("place_changed", onPlaceChanged);

function onPlaceChanged() {
  var place = autocomplete.getPlace();
}
