
$('#city-form').submit(function(event) {
  event.preventDefault();
  var cityName = $('#city-type').val(); //this variable gets the value of the user input

  console.log(cityName);

  if (cityName === 'NYC' || cityName === 'New York' || cityName === 'New York City') {  //if user inputs any of these variations
    $('body').css('background-image', 'url(images/nyc.jpg)'); //then the new york image will appear
    $('#city-form')[0].reset(); //this will reset the "enter a city name" after one of the variations above is entered
  }
  else if (cityName === 'LA' || cityName === 'Los Angeles' || cityName === 'LAX') {
    $('body').css('background-image', 'url(images/la.jpg)');
    $('#city-form')[0].reset();
  }
  else if (cityName === 'San Francisco' || cityName === 'SF' || cityName === 'Bay Area') {
    $('body').css('background-image', 'url(images/sf.jpg)');
    $('#city-form')[0].reset();
  }
  else if (cityName === 'Austin' || cityName === 'ATX') {
    $('body').css('background-image', 'url(images/austin.jpg)');
    $('#city-form')[0].reset();
  }
  else if (cityName === 'Sydney' || cityName === 'SYD') {
    $('body').css('background-image', 'url(images/sydney.jpg)');
    $('#city-form')[0].reset();
  }
  else {
    alert("Please enter a different city");

  };

});
