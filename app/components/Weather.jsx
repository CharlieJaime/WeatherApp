var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return{
      isLoading: false
    }
  },
  handleCityName: function(city){
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(city).then(function (temp){
      that.setState({
        city: city,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage){
      that.setState({isLoading: false});
      alert(errorMessage);
    });
  },
  render: function(){
    var {isLoading, temp, city} = this.state;

    function renderMsg(){
      if (isLoading) {
        return <h3 className='col-md-offset-4'>Fetching weather...</h3>
      } else if(temp && city){
        return <WeatherMsg  temp={temp} city={city}/>;
      }
    }

    return(
      <div>
        <WeatherForm onCityName={this.handleCityName}/>
        {renderMsg()}
      </div>
    )
  }
});

module.exports = Weather;
