var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var mda = require('../MultiDimensionalArray.js');

describe('MultiDimensionalArray', function() {
  describe('generate_1d', function() {
    it('should be defined as a function', function () {
      expect(mda.generate_1d).to.be.a('function');
      expect(mda.generate_1d).to.be.instanceof(Function);
    });

    it('empty args case: should return array (length 3) with random bool values', function() {
      var result = mda.generate_1d();

      expect(result).to.be.instanceof(Array);
      result.should.have.length(3);
      result.forEach(function(value) {
        expect(value).to.be.a('boolean');
      });
    });

    it('one arg case: should return single array (length 4) with random bool values', function() {
      var result = mda.generate_1d(4);

      expect(result).to.be.instanceof(Array);
      result.should.have.length(4);
      //Do I have to repeat this code from the empty args case?? O___o
      result.forEach(function(value) {
        expect(value).to.be.a('boolean');
      });
    });

    it('one arg (not a num) case: should return an empty array)', function() {
      var result = mda.generate_1d('potato');

      expect(result).to.be.instanceof(Array);
      expect(result).to.be.empty();
    });
    
  }); //desc generate_1d

  describe("generate_2d", function() {
    it('should be defined as a function', function() {
      expect(mda.generate_2d).to.be.a('function');
      expect(mda.generate_2d).to.be.instanceof(Function);
    });

    it("empty args case: should return array (length 3) of arrays (each length 3) containing random bool values", function() {
      var result = mda.generate_2d();

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

    it("one arg case: should return array (length 4) of arrays (each length 3) containing random bool values", function() {
      var result = mda.generate_2d(4);

      expect(result).to.be.instanceof(Array);
      result.should.have.length(4);

      result.forEach(function(array) {
        expect(array).to.be.instanceof(Array);
        array.should.have.length(3);

        array.forEach(function(value) {
          expect(value).to.be.a('boolean');
        });
      });
    });

    it("two args case: should return array (length 5) of arrays (each length 4) containing random bool values", function() {
      var result = mda.generate_2d(5,4);

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

  }); //desc generate_2d


  describe("generate_3d", function() {
    it('should be defined as a function', function() {
      expect(mda.generate_3d).to.be.a('function');
      expect(mda.generate_3d).to.be.instanceof(Function);
    });

    it("three args case: should return array (length 3) of arrays (each length 4) containing arrays (length 5) of random bool values", function() {
      var result = mda.generate_3d(3,4,5);

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

  }); //desc generate_3d

}); //desc MultiDim(blahblah)