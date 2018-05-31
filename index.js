document.addEventListener("DOMContentLoaded", startApp)

let coords
const key = '82ba185207f8f008ede7b8623f332b74'
const url = `http://api.openweathermap.org/data/2.5/weather?`

function startApp() {
  console.log('App started !')
  getLocation()
}

function getLocation() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      coords = [position.coords.latitude, position.coords.longitude]
      console.log(coords)
      getWeather(coords)
    })
  }
     else {
          window.alert("Could not get location");
    }
}

function getWeather(coords) {
fetch(url + `lat=${coords[0]}&lon=${coords[1]}&APPID=${key}`)
  .then((resp) => resp.json())  
  .then(function(data) {
    console.log('data', data)
  })
}


  // function showWeather(lat, long) {
  //   var url = `https://api.darksky.net/forecast/f672ff13193bfcc40427a678ebfdbc71/${lat},${long}` + `?format=jsonp&callback=displayWeather`;
  //   var script = document.createElement("script");
  //   script.type = "text/javascript";
  //   script.src = url;
  //   document.getElementsByTagName("head")[0].appendChild(script);
  //   displayWeather(object)   
  // }