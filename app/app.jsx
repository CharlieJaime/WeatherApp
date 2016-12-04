var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistroy} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

/*********
Dom Render
**********/
ReactDOM.render(
  <Router history={hashHistroy}>
    <Route path='/' component={Main}>
      <Route path="about" component={About}/>
      <Route path="example" component={Example}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById("app")
);
