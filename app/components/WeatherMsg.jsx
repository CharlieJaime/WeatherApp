var React = require('react');


/*********
Weather Message compenent
**********/
var WeatherMsg = React.createClass({
  render: function(){
    var {temp, city} = this.props;

    return(
      <div>
        <h2>Weather: its {temp} in {city}</h2>
      </div>
    );
  }
});

module.exports = WeatherMsg;
