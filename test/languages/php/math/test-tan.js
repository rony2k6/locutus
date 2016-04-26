// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var tan = require('../../../../src/php/math/tan.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/tan.js', function () {
  it('should pass example 1', function (done) {
    Math.ceil(tan(8723321.4) * 10000000)
    var expected = 54251849
    var result = Math.ceil(tan(8723321.4) * 10000000)
    expect(result).to.deep.equal(expected)
    done()
  })
})