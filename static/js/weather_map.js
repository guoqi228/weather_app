
function showMap(searchTerm="Boston") {
  var map;
  function initMap(response) {
    console.log(response.coord);
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: response.coord.lat, lng: response.coord.lon},
      zoom: 8
    });
  }

  var url = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {
    q: searchTerm,
    APPID: ''
  }

  $.get(url, data, initMap);
  // need to call initMap()
  //initMap();
}
