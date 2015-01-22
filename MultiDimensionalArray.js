module.exports = {
  generate_randoBool : function () {
    var num_between_0_and_1 = Math.random();
    var HALFSIES = 0.5;
    return (num_between_0_and_1 < HALFSIES);
  },

  generate: function (numDimensions, length) {
    var result = [];

    if (numDimensions === 0) {
      return this.generate_randoBool();
    } else {
      for (var i = 0; i < length; i++) {
        //decrement numDimensions so generate() can return rando bools
        //for base case
        result.push(this.generate((numDimensions - 1), length));
      }
      return result;
    }
  },

  flattenAndKeepValue : function (array, value, result) {
      for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          result = this.flattenAndKeepValue(array[i], value, result);
        } else {
          if (array[i] === value) {
            result = result.concat(array[i]);
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
