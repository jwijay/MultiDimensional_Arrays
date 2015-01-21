var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var mda = require('../MultiDimensionalArray.js');

describe("MultiDimensionalArray", function() {
  describe("Generate Function", function() {
    it('should be defined as a function', function () {
      expect(mda.generate).to.be.a('function');
      expect(mda.generate).to.be.instanceof(Function);
    });
  

    it('should return an array (length 3) each containing arrays (length 3) with random boolean values', function() {
      var result = mda.generate();

      result.should.be.an('array');
      result.should.have.length(3);
      result[0].should.have.length(3);
      result[1].should.have.length(3);
      result[2].should.have.length(3);
    });

  }); // desc('Generate Function')
}); // desc('MultidimensionalArray')