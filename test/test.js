var assert = require("assert")
var lib = require('../src/lib.js');
console.log(lib);
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})


describe('Adding', function(){
  describe('add()', function(){
    it('should do something when something', function(){

      assert.equal(3, lib.add(1,2));
      assert.equal(1, true);


    })
  })
})
