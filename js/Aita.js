'use strict';

var React = require('react-native');

var Aita = {
  PropTypes: {
    product: React.PropTypes.shape({
      //like `5` flights, `1` year, etc...
      count: React.PropTypes.string.isRequired,

      //like 5 `flights`, 1 `year`, etc...
      measure: React.PropTypes.string.isRequired,

      //`Unlimited`, `Push only`, or other descriptive title
      description: React.PropTypes.string.isRequired,

      price: React.PropTypes.number.isRequired,

      //price w/ locale-aware currency, e.g. '$0.99' or '590 RUB'
      priceString: React.PropTypes.string.isRequired,

      //AppStore identifier of the product
      identifier: React.PropTypes.string.isRequired
    }),
  },
};

module.exports = Aita;
