'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;

var FilledButton = require('./FilledButton');
var Aita = require('../Aita');
var InAppUtils = require('react-native').NativeModules.InAppUtils;

/**
 * Displays specified product
*/
var PurchaseOption = React.createClass({
  propTypes: {
    product: Aita.PropTypes.product.isRequired,

    style: View.propTypes.style,

    //called when button is pressed
    onPurchaseStarted: React.PropTypes.func.isRequired,

    //called with error (if any) and product's identifier after purchase
    onPurchaseEnded: React.PropTypes.func.isRequired,
  },
  buttonPressed: function() {
    var identifier = this.props.product.identifier;
    this.props.onPurchaseStarted(identifier);

    //call native to process purchase
    InAppUtils.purchaseProductWithIdentifier(identifier, (error) => {
      this.props.onPurchaseEnded(error, identifier);
    });
  },
  render: function() {
    return (
      <View style={[styles.option, this.props.style]}>
        <Text style={[styles.text, styles.countText]}>
          {this.props.product.count}
        </Text>
        <Text style={[styles.text]}>
          {this.props.product.measure}
        </Text>
        <Text style={[styles.text, styles.greenText, styles.descriptionText]}>
          {this.props.product.description}
        </Text>
        <FilledButton
          style={{backgroundColor:'#0ea378'}}
          highlightedColor='#007655'
          title={this.props.product.priceString}
          titleStyle={{color:'white'}}
          onPress={this.buttonPressed}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  option: {
    flex:1,
    paddingHorizontal: 3
  },
  text: {
    backgroundColor: 'transparent',
    color: 'white',
    textAlign: 'center'
  },
  countText: {
    fontSize: 50,
    fontWeight: '800',
  },
  greenText: {
    color: '#0ea378',
  },
  descriptionText: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 6,
    marginBottom: 6,
  },
});

module.exports = PurchaseOption;
