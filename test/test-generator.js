var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var mda = require('../MultiDimensionalArray.js');

describe('MultiDimensionalArray', function() {

  describe("generate", function() {
    it('should be defined as a function', function() {
      expect(mda.generate).to.be.a('function');
      expect(mda.generate).to.be.instanceof(Function);
    });

    it("two args case: should return array (depth 2) of arrays (of length 3) containing random bool values", function() {
      var result = mda.generate(2,3);

      expect(result).to.be.instanceof(Array);
      result.should.have.length(3);


      result.forEach(function(array) {
        expect(array).to.be.instanceof(Array);
        array.should.have.length(3);

        array.forEach(function(value) {
          expect(value).to.be.a('boolean');
        });
      });
    });

    it("two args case: should return array (depth 3) of arrays (of length 2) containing random bool values", function() {
      var result = mda.generate(3,2);

      expect(result).to.be.instanceof(Array);
      result.should.have.length(2);

      result.forEach(function(tier2) {
        expect(tier2).to.be.instanceof(Array);
        tier2.should.have.length(2);

        tier2.forEach(function(tier3) {
          expect(tier3).to.be.instanceof(Array);
          tier3.should.have.length(2);

          tier3.forEach(function(value) {
            expect(value).to.be.a('boolean');
          });
        });
      });
    });

  }); //desc generate

}); //desc MultiDim(blahblah)