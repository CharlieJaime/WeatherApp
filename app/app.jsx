var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistroy} = require('react-router');
var Main = require('Main');


/*********
Dom Render
**********/
ReactDOM.render(
  <Router history={hashHistroy}>
    <Route path='/' component={Main}>

    </Route>
  </Router>,
  document.getElementById("app")
);
