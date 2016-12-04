var assert = require('assert')

describe('When completing the extersizes', function() {

  var exersizes = require('./exersize.js')

  it('Should return nothing!', function() {
    var result = exersizes.test()

    assert(result == undefined, 'test should exist and not return anything!')
  })

  it('Should return 4', function() {
    var result = exersizes.add(2, 2)

    assert(result == 4, 'Add method does not add!!?!?!')
  })

  it('Should multiply', function() {
    var result = exersizes.multiply(3, 3)

    assert(result == 9, 'Multiply method should multiply!!')
  })
})
