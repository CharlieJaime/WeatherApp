var React = require('react');

/*********
Weather Form compenent
**********/
var WeatherForm = React.createClass({
  onFormSubmit: function (e){
    e.preventDefault();

    var city = this.refs.city.value;

    if(city.length > 0){
      this.refs.city.value = '';
      this.props.onCityName(city);
    }
  },
  render: function(){
    return(
      <div>
        <h1>Get Weather</h1>
        <form onSubmit={this.onFormSubmit}>
          <input placeholder='Enter City Name' type='text' ref='city'/>
          <br/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
