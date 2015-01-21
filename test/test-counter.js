var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var mda = require('../MultiDimensionalArray.js');

describe("MultiDimensionalArray", function() {
  describe("count", function() {
    it("one-arg (array) case: should return a number (how many truthy values there are inside array (regardless of depth)", function() {
      var sample_array = [1,0,0,1,0,0,0,0,1];
      var result = mda.count(sample_array);

      expect(result).to.equal(3);
    });
  });
  
});