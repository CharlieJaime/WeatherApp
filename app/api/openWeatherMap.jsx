var axios = require('axios');

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=f03c05a5b14cf942cf3ffb53bb1658ff&units=imperial";

module.exports = {
  getTemp: function (city){
    var encodedCity = encodeURIComponent(city);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedCity}`;

    return axios.get(requestUrl).then(function (res){
      // debugger;
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else{
        return res.data.main.temp;
      }
    }, function (res){
      throw new Error(res.data.message);
    });
  }
}
