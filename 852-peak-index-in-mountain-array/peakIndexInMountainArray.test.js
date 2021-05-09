const { test, expect } = require('@jest/globals')
const peakIndexInMountainArray = require('./peakIndexInMountainArray')
const peakIndexInMountainArrayBinarySearch = require('./peakIndexInMountainArrayBinarySearch')

test('arr = [0,1,0] has a peak index = 1', () => {
  expect(peakIndexInMountainArray([0,1,0])).toBe(1)
})

test('[0,2,1,0] has a peak index = 1', () => {
  expect(peakIndexInMountainArray([0,2,1,0])).toBe(1)
})

test('arr = [0,10,5,2] has a peak index = 1', () => {
  expect(peakIndexInMountainArray([0,10,5,2])).toBe(1)
})

test('arr = [3,4,5,1] has a peak index = 2', () => {
  expect(peakIndexInMountainArray([3,4,5,1])).toBe(2)
})

test('arr = [24,69,100,99,79,78,67,36,26,19] has a peak index = 2', () => {
  expect(peakIndexInMountainArray([24,69,100,99,79,78,67,36,26,19])).toBe(2)
})

test('arr = [55,59,63,99,97,94,84,81,79,66,40,38,33,23,22,21,17,9,7] has a peak index = 3', () => {
  expect(peakIndexInMountainArray([55,59,63,99,97,94,84,81,79,66,40,38,33,23,22,21,17,9,7])).toBe(3)
})

test('Binary: arr = [0,1,0] has a peak index = 1', () => {
  expect(peakIndexInMountainArrayBinarySearch([0,1,0])).toBe(1)
})

test('Binary: [0,2,1,0] has a peak index = 1', () => {
  expect(peakIndexInMountainArrayBinarySearch([0,2,1,0])).toBe(1)
})

test('Binary: arr = [0,10,5,2] has a peak index = 1', () => {
  expect(peakIndexInMountainArrayBinarySearch([0,10,5,2])).toBe(1)
})

test('Binary: arr = [3,4,5,1] has a peak index = 2', () => {
  expect(peakIndexInMountainArrayBinarySearch([3,4,5,1])).toBe(2)
})

test('Binary: arr = [24,69,100,99,79,78,67,36,26,19] has a peak index = 2', () => {
  expect(peakIndexInMountainArrayBinarySearch([24,69,100,99,79,78,67,36,26,19])).toBe(2)
})

test('Binary: arr = [55,59,63,99,97,94,84,81,79,66,40,38,33,23,22,21,17,9,7] has a peak index = 3', () => {
  expect(peakIndexInMountainArrayBinarySearch([55,59,63,99,97,94,84,81,79,66,40,38,33,23,22,21,17,9,7])).toBe(3)
})
