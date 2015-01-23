module.exports = {
  generate_randoBool : function () {
    var num_between_0_and_1 = Math.random();
    var HALFSIES = 0.5;
    return (num_between_0_and_1 < HALFSIES);
  },

  generate_nTiersOfLength: function (tiers, length) {
    var result = [];

    if (tiers === 0) {
      return this.generate_randoBool();
    } else {
      for (var i = 0; i < length; i++) {
        //decrement tiers so generate_nTiersOfLength can return rando bools
        //for base case
        result.push(this.generate_nTiersOfLength((tiers - 1), length));
      }
      return result;
    }
  },

  generate: function () {
    var result = [];
    var tiers = Array.prototype.slice.call(arguments);

    if (tiers.length === 0) {
      return this.generate_nTiersOfLength(2, 3);
    } else if (tiers.length === 1) {
      return this.generate_nTiersOfLength(1, tiers[0]);
    } else {
      var currTier = tiers[0];
      var restOfTiers = tiers.slice(1);
      
      for (var i = 0; i < currTier; i++) {
        result.push(this.generate.apply(this,restOfTiers));
      }
    }
    return result;
  },

  flattenAndKeepValue : function (array, value, result) {
      for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          result = this.flattenAndKeepValue(array[i], value, result);
        } else {
          if (typeof(value) === 'boolean') {
            if (array[i] == value) {
              result = result.concat(array[i]);
            }
          } else {
            if (array[i] === value) {
              result = result.concat(array[i]);
            }
          }
          
        }
      }
    
    return result;
  },

  count : function (array, value) {
    if (value === undefined) {
      value = true;
    }
    return this.flattenAndKeepValue(array, value, []).length;
  }

};