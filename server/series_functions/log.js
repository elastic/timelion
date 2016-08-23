var alter = require('../lib/alter.js');
var _ = require('lodash');
var Chainable = require('../lib/classes/chainable');
module.exports = new Chainable('log', {
  args: [
    {
      name: 'inputSeries',
      types: ['seriesList']
    }
  ],
  help: 'Return the base 10 logarithm value of each value in the series list',
  fn: function logFn(args) {
    return alter(args, function (eachSeries) {
      var data = _.map(eachSeries.data, function (point) {
        return [point[0], Math.log10(point[1])];
      });
      eachSeries.data = data;
      return eachSeries;
    });
  }
});
