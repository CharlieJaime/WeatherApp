var React = require('react');

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
      <div className='container-fluid'>
        <div className="row">
          <div className='col-md-offset-5'>
            <h1>Get Weather</h1>
            <form onSubmit={this.onFormSubmit}>
              <input className="col-md-3" placeholder='Enter City Name' type='text' ref='city'/>
              <br/>
              <br/>
              <button className="btn btn-info col-md-3">Get Weather</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = WeatherForm;
