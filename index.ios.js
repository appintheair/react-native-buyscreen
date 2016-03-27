'use strict';

var React = require('react-native');
var PurchaseOption = require('./js/components/PurchaseOption');
var InAppUtils = require('react-native').NativeModules.InAppUtils;
var Carousel = require('react-native-looped-carousel');
var HUDActivityIndicator = require('./js/components/HUDActivityIndicator.ios');
var PromoImage = require('./js/components/PromoImage');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var {
  AlertIOS,
  AppRegistry,
  StyleSheet,
  View,
  StatusBarIOS,
} = React;

var AitaBuyscreen = React.createClass({
  componentDidMount: function() {
    StatusBarIOS.setHidden(true);
    //call native to load in-apps products configuration
    InAppUtils.loadProducts((error, products) => {
      if (error) {
        //console.error(error);
      } else {
        this.setState({products: products});
      }
    });
  },
  getInitialState: function() {
    return {
      products: InAppUtils.defaultConfiguration,
      isIndicatorAnimating: false,
      size: {width: width, height: height}
    };
  },
  _onPurchaseStarted: function(identifier) {
    console.log('started ' + identifier);
    this.setState({isIndicatorAnimating: true})
  },
  _onLayoutDidChange: function(e) {
    var layout = e.nativeEvent.layout;
    this.setState({size: {width: layout.width, height: layout.height}});
  },
  _onPurchaseEnded: function(error, identifier) {
    if (error) {
      console.error('cannot be purchased');
      AlertIOS.alert(
        'Purchase Status',
        'Failed :('
      );
    } else {
      console.log('ended ' + identifier);
      AlertIOS.alert(
        'Purchase Status',
        'Succeeded :)'
      );
    }
    this.setState({isIndicatorAnimating: false})
  },
  _onPageChanged: function(page) {
    console.log('page changed ' + page);
  },
  render: function() {
    var options = this.state.products.map(
      (product, i) => {
          var style = {};
          if (i===0) {
              style.paddingLeft = 12;
          } else if (i === this.state.products.length - 1) {
              style.paddingRight = 12;
          }
          return (
            <PurchaseOption
              style={style}
              key={product.identifier}
              product={product}
              onPurchaseStarted={this._onPurchaseStarted}
              onPurchaseEnded={this._onPurchaseEnded}
            />
          );
      }
    );
    var pages = [<PromoImage
                  key="promo1"
                  image={require('image!screen_1')}
                  header="Be aware"
                  description="of everything that happens to your flight"
                  promoText="Get Text messages or Push for every flight status change"
                  style={this.state.size}
                />,
                <PromoImage
                  key="promo2"
                  image={require('image!screen_2')}
                  header="Stay"
                  description="informed when offline"
                  promoText="Text messages keep you informed of your flight with no roaming charges"
                  style={this.state.size}
                />,
                <PromoImage
                  key="promo3"
                  image={require('image!screen_3')}
                  header="Don't"
                  description="miss your flight"
                  promoText="We will notify you of every flight status change"
                  style={this.state.size}
                />];

    var indicator = this.state.isIndicatorAnimating ? <HUDActivityIndicator /> : null;

    return (
      <View style={styles.main} onLayout={this._onLayoutDidChange}>
          <Carousel style={this.state.size} pageStyle={this.state.size} onAnimateNextPage={this._onPageChanged}>
            {pages}
          </Carousel>
          <View style={[styles.options, {width: this.state.size.width}]}>{options}</View>
          {indicator}
      </View>
    );
  }
});

var styles = StyleSheet.create({
  main: {
    flex: 1
  },
  options: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: width,
    bottom: 24,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('AitaBuyscreen', () => AitaBuyscreen);
