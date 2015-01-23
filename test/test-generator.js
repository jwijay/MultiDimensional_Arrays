var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var mda = require('../MultiDimensionalArray.js');

describe('MultiDimensionalArray', function() {
  describe('generate', function() {
    it('should be defined as a function', function () {
      expect(mda.generate).to.be.instanceof(Function);
    });

    it("empty args case: should return array (length 3) of arrays (each length 3) containing random bool values", function() {
      var result = mda.generate();

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

    it('one arg case: should return single array (length 4) with random bool values', function() {
      var result = mda.generate(4);

      expect(result).to.be.instanceof(Array);
      result.should.have.length(4);

      result.forEach(function(value) {
        expect(value).to.be.a('boolean');
      });
    });

    it('one arg (not a num) case: should return an empty array)', function() {
      var result = mda.generate('potato');

      expect(result).to.be.instanceof(Array);
      expect(result).to.be.empty();
    });

    it("two args case: should return array (length 5) of arrays (each length 4) containing random bool values", function() {
      var result = mda.generate(5,4);

      expect(result).to.be.instanceof(Array);
      result.should.have.length(5);

      result.forEach(function(array) {
        expect(array).to.be.instanceof(Array);
        array.should.have.length(4);

        array.forEach(function(value) {
          expect(value).to.be.a('boolean');
        });
      });
    });

    it("three args case: should return array (length 3) of arrays (each length 4) containing arrays (length 5) of random bool values", function() {
      var result = mda.generate(3,4,5);

      expect(result).to.be.instanceof(Array);
      result.should.have.length(3);

      result.forEach(function(second_dimension) {
        expect(second_dimension).to.be.instanceof(Array);
        second_dimension.should.have.length(4);

        second_dimension.forEach(function(third_dimension) {

          third_dimension.should.have.length(5);

          third_dimension.forEach(function(value) {
            expect(value).to.be.a('boolean');
          });

       });
      });
    });
    
  }); //desc generate

}); //desc MultiDim(blahblah)