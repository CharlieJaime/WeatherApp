var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return(
    <div className='container-fluid'>
      <div className='row'>
      <div className="navbar navbar-inverse col-md-10 col-md-offset-1">
        <IndexLink to='/' className='navbar-brand' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to='/about' className='navbar-brand navbar-right' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to='/example' className='navbar-brand navbar-right' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>
    </div>
    </div>
  );
};

module.exports = Nav;
