var React = require('react');


/*********
Weather Message compenent
**********/
var WeatherMsg = React.createClass({
  render: function(){
    var city = this.props.city;

    return(
      <div>
        <h2>Weather: {city}</h2>
      </div>
    );
  }
});

module.exports = WeatherMsg;
