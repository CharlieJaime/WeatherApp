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
    this.setState(city);
  },
  render: function(){
    var city = this.state.city;

    return(
      <div>
        <WeatherForm onCityName={this.handleCityName}/>
        <WeatherMsg city={city}/>
      </div>
    );
  }
});

module.exports = Weather;
