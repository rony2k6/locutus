// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var implode = require('../../../../src/php/strings/implode.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/implode.js', function () {
  it('should pass example 1', function (done) {
    implode(' ', ['Kevin', 'van', 'Zonneveld'])
    var expected = 'Kevin van Zonneveld'
    var result = implode(' ', ['Kevin', 'van', 'Zonneveld'])
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    implode(' ', {first:'Kevin', last: 'van Zonneveld'})
    var expected = 'Kevin van Zonneveld'
    var result = implode(' ', {first:'Kevin', last: 'van Zonneveld'})
    expect(result).to.deep.equal(expected)
    done()
  })
})