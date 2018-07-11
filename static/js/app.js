$.get('../../components/header.html', function(response) {
  $("#nav").html(response);
})


$("#weather-info").css("display", "None");

$("#search_weather").submit( event => {
  event.preventDefault();
  var searchTerm = $("#search_city").val();
  console.log(searchTerm);

  var url = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {
    q: searchTerm,
    APPID: '...'
  };

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

    var lat = response.coord.lat;
    var lon = response.coord.lon;

    $("#weather-info").css("display", "block");
  }
  $.get(url, data, showWeather);


})
