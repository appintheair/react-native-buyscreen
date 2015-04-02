'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View
} = React;


/**
 * Simple line
 * can be customized using style
*/
var Line = React.createClass({
    propTypes:{
        style: View.propTypes.style,
    },
  render: function() {
    return (
      <View style={[styles.line, this.props.style]} />
    );
  }
});

var styles = StyleSheet.create({
  line: {
    marginTop: 10,
    marginBottom: 10,
    height: 1,
    width: 260,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
});

module.exports = Line;
