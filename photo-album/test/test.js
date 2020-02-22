var photos = require('../bin/photos');
var expect = require('chai').expect;

describe('getPhotos', function() {

  
  context('with number argument', function() {
    it('should return values', function() {
      expect(photos.getPhotos(1)).to.not.be.null; 
    })
  })
  
  context('with non-number argument', function() {
    it('should throw error', function() {
      expect(function() {
        photos.getPhotos('hi')
      }).to.throw(TypeError, 'getPhotos() expects only numbers')
    })
  })

    context('with no argument', function() {
    it('should throw error', function() {
      expect(function() {
        photos.getPhotos()
      }).to.throw(TypeError, 'getPhotos() expects only numbers')
    })
  })
  
})