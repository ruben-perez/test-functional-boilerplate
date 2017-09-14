import { expect } from 'chai';
import { level3Function } from './exercise1';
import { sum, mult, multBy10, multBy20 } from './math.js';

const numbers = [2, 3, 4, 5, 6]

describe('level3Function', () => {
  it('should return a first, second and rest properties ', () => {
    let result = level3Function(numbers)
    expect(result).to.have.property('first')
    expect(result).to.have.property('second')
    expect(result).to.have.property('rest')
  })

  it('first and second should be numbers', () => {
    let result = level3Function(numbers)
    expect(result.first).to.be.a('number')
    expect(result.second).to.be.a('number')
  })

  it('rest should be an array', () => {
    let result = level3Function(numbers)
    expect(result.rest).to.be.an('array')
  })

  it('the first value should be ten times the double of the first item of the array', () => {
    let result = level3Function(numbers)
    expect(result.first).to.equal(multBy20(numbers[0]))
  })

  it('the second value should be ten times the double of the second item of the array', () => {
    let result = level3Function(numbers)
    expect(result.second).to.equal(multBy20(numbers[1]))
  })

  it('the rest values should be ten times the value of the remaining values after the 2 firsts', () => {
    let result = level3Function(numbers)
    console.log(result.rest)
    expect(result.rest).to.eql([40, 50, 60])
  })
})
