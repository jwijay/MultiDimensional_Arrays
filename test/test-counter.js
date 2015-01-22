var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var mda = require('../MultiDimensionalArray.js');

describe("MultiDimensionalArray", function() {
  describe("count", function() {
    it("one-arg (array) case: should return a number (how many truthy values there are inside array (regardless of depth)", function() {
      var sample_array = [true,false,false,true,false,false,false,false,true];
      var result = mda.count(sample_array);

      expect(result).to.equal(3);

      var sample_array2 = [[true],[true,[false]],true,false,false,false,false,true];

      var result2 = mda.count(sample_array2);

      expect(result2).to.equal(4);
    });
  });
  
});