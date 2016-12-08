var React = require('react');
var WeatherMsg = require('WeatherMsg');
var WeatherForm = require('WeatherForm');
var OpenWeatherMap = require('OpenWeatherMap');


/*********
Main Weather compenent
**********/
var Weather = React.createClass({
  getInitialState: function() {
    return{
      isLoading: false
    };
  },
  handleCityName: function(city){
    var that = this;

    this.setState({isLoading: true});

    OpenWeatherMap.getTemp(city).then(function(temp){
      that.setState({
        city: city,
        temp: temp,
        isLoading: false
      });
    }, function(err){
      that.setState({
        isLoading: false
      });
      alert(err);
    })
  },
  render: function(){
    var {isLoading, temp, city} = this.state;

    function renderMsg(){
      if (isLoading) {
        return <h3>Fetching weather...</h3>
      } else if(temp && city){
        return <WeatherMsg  temp={temp} city={city}/>;
      }
    }

    return(
      <div>
        <WeatherForm onCityName={this.handleCityName}/>
        {renderMsg()}
      </div>
    );
  }
});

module.exports = Weather;
