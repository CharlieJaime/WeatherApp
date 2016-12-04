var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: "Charlie",
  location: 'Los Angeles'
};

var objTwo = {
  age: 25,
  ...objOne
};

console.log(objTwo);

/*********
Dom Render
**********/
ReactDOM.render(
  <h1>Boilerplate app!</h1>,
  document.getElementById("app")
);
