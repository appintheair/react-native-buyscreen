'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var {
  ActivityIndicatorIOS,
  StyleSheet,
  View,
} = React;


/**
 * ProgressHUD-like animated indicator
 * animates everytime, should be added/removed to/from superview
*/
var HUDActivityIndicator = React.createClass({
  render: function() {
    return (
      <View style={styles.hudCenter}>
        <ActivityIndicatorIOS
          size="large"
          color="white"
          style={styles.indicator}
        />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  indicator: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    borderRadius: 10,
  },
  hudCenter: {
    backgroundColor: 'transparent',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    width: width,
    top: 0,
  },
});

module.exports = HUDActivityIndicator;
