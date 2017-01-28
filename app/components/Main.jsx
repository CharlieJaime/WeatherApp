var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return(
    <div className="MainContainer">
      <Nav/>
      {props.children}
    </div>
  );
};

module.exports = Main;
