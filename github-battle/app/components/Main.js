var React = require('react');
var mainBg = require('../styles').mainBg;

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container' style={mainBg}>
        {this.props.children}
      </div>
    )
  }

});

module.exports = Main;
