var React = require('react');
var WeatherMsg = require('WeatherMsg');
var WeatherForm = require('WeatherForm');


/*********
Main Weather compenent
**********/
var Weather = React.createClass({
  getDefaultProps: function() {
      return{
        city: 'Local'
      };
  },
  getInitialState: function() {
    return{
      city: this.props.city
    };
  },
  handleCityName: function(city){
    this.setState({
      city: city
    });
  },
  render: function(){
    var {temp, city} = this.state;

    return(
      <div>
        <WeatherForm onCityName={this.handleCityName}/>
        <WeatherMsg  temp={temp} city={city}/>
      </div>
    );
  }
});

module.exports = Weather;
