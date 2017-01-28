var React = require('react');

var WeatherMsg = ({temp, city}) => {
  return(
    <div>
      <div className='col-md-offset-4'>
        <h2 className=''>Weather: its {temp} in {city}</h2>
      </div>
    </div>
  );
};

module.exports = WeatherMsg;
