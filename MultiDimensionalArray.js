module.exports = {
  generate_randoBool : function () {
    return (Math.random() < 0.5);
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

  flattenAndKeepTrues : function (array, result) {
      for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          result = this.flattenAndKeepTrues(array[i], result);
        } else {
          if (array[i] === true) {
            result = result.concat(array[i]);
          }
        }
      }
    
    return result;
  },

  count : function (array) {
    return this.flattenAndKeepTrues(array, []).length;
  }

};
