// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var mt_rand = require('../../../../src/php/math/mt_rand.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/mt_rand.js', function () {
  it('should pass example 1', function (done) {
    mt_rand(1, 1)
    var expected = 1
    var result = mt_rand(1, 1)
    expect(result).to.deep.equal(expected)
    done()
  })
})