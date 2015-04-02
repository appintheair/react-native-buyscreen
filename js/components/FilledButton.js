'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;


/**
 * Button with round corners
*/
var FilledButton = React.createClass({
  propTypes:{
      style: View.propTypes.style,
      titleStyle: Text.propTypes.style,
  },
  render: function() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor={this.props.highlightedColor}
        style={[styles.buttonBack, this.props.style]}
      >
        <Text
          style={[styles.buttonText, this.props.titleStyle]}
        >
          {this.props.title}
        </Text>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  buttonText: {
    backgroundColor: 'transparent',
    fontSize: 16,
    textAlign: 'center'
  },
  buttonBack: {
    padding: 12,
    borderRadius: 4
  }
});

module.exports = FilledButton;
