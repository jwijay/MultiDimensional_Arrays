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

  generate_2d : function (tier1, tier2) {

  },
  generate_3d : function (tier1, tier2, tier3) {

  }
};
