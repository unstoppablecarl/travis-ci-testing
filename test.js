var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})


describe('Something', function(){
  describe('doSomethingElse()', function(){
    it('should do something when something', function(){
      assert.equal(1, 1);
      assert.equal(1, true);


    })
  })
})
