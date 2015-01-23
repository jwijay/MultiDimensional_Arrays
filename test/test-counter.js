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

    it("two-arg (array, value) case: should return a number (how many value(s) are inside array (regardless of depth)", function() {
      var sample_array = [12, 18, 2, 16, 10, 13, 5, 17, 19, 8, 2];
      var result = mda.count(sample_array, 2);

      expect(result).to.equal(2);

      var sample_array2 = [[12, 'cat'], 18, 2, [['catPotato'], [[[16]], 10], 13], 'cat', 5, 17, 19, 8, 2, 'cat', 'potato'];

      var result2 = mda.count(sample_array2, 'cat');

      expect(result2).to.equal(3);

      var sample_array3 = [1,0,0,1,0,0,0,0,1]; 
      var result3 = mda.count(sample_array3, true);

      expect(result3).to.equal(3);

      var sample_array4 = [[1,0],[0,1],[0,0],[0,0]];
      var result4 = mda.count(sample_array4, false);

      expect(result4).to.equal(6);

      var sample_array5 = [  
        [  
          ["red","green","blue"],  
          ["red","green","blue"],  
          ["red","green","blue"],  
        ],  
        [  
          ["red","green","red"],  
          ["red","green","red"],  
          ["red","green","red"],  
        ],  
        [  
          ["red","red","blue"],  
          ["red","red","blue"],  
          ["red","red","blue"],  
        ],  
      ];  
      var result5 = mda.count(sample_array5, "red");

      expect(result5).to.equal(15);

    });

  });

});