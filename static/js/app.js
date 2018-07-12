$.get('../../components/header.html', function(response) {
  $("#nav").html(response);
})


$("#weather-info").css("display", "None");

$("#search_weather").submit( event => {
  event.preventDefault();
  var searchTerm = $("#search_city").val();
  console.log(searchTerm);
  showAll(searchTerm);
})

function showAll(searchTerm) {

  if (typeof searchTerm === "undefined") {
    return "No input";
  }

  function convert(degree) {
    return (((degree - 273) * (9/5)) + 32).toFixed(2);
  }

  function showWeather(response) {
    $("#city").text(searchTerm.toUpperCase());
    $("#high").text(convert(response.main.temp_max));
    $("#low").text(convert(response.main.temp_min));
    $("#weather").text(response.weather[0].description);
    $("#humidity").text(response.main.humidity);
    console.log(response);

    var map;
    console.log(response.coord);
    var myLatLng = {lat: response.coord.lat, lng: response.coord.lon};
    map = new google.maps.Map(document.getElementById('weather_map'), {
      center: myLatLng,
      zoom: 6
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map
    });

    $("#weather-info").css("display", "block");
  }

  var url = 'http://api.openweathermap.org/data/2.5/weather';
  console.log(searchTerm);
  var data = {
    q: searchTerm,
    APPID: 'a759e4a12aba09eded79eae0f5ac6f06'
  }

  $.get(url, data, showWeather);
}
