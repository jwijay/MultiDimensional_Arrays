module.exports = {
  generate_randoBool : function () {
    return (Math.random() < 0.5);
  },

  //generate_1d accepts up to 1 arg (numElements to contain)
  generate_1d : function (numElements) {
    //generate_1d will create new array (to be returned)
    var result = [];

    //if no arg is passed in, returns array w/ 3 random bools
    if (numElements === undefined) {
      numElements = 3;
    } 
    for (var i = 0; i < numElements; i++) {
        result.push(this.generate_randoBool());
    }
    return result;
  },

  //generate_2d takes up to 2 args
  generate_2d : function (tier1, tier2) {
    var result = [];

    //no args case: return [[3 rando bools],[3 rando bools], [3 rando bools]]
    if(tier1 === undefined && tier2 === undefined){
      tier1 = 3;
      tier2 = 3;
    } else if (tier2 === undefined) {
      tier2 = 3;
    } 
    for (var i = 0; i < tier1; i++) {
      result.push(this.generate_1d(tier2));
    }    
    return result;
  },

  generate_3d : function (tier1, tier2, tier3) {
    var result = [];

    if (tier1 === undefined && tier2 === undefined && tier3 === undefined) {
      tier1 = 3;
      tier2 = 3;
      tier3 = 3;
    } else if (tier1 === undefined && tier2 === undefined){
      tier1 = 3;
      tier2 = 3;
    } else if (tier2 === undefined) {
      tier2 = 3;
    } 
    for (var i = 0; i < tier1; i++) {
      result.push(this.generate_2d(tier2, tier3));
    }    
    return result;
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
