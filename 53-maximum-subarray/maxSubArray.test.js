const maxSubArray = require('./maxSubArray')

test('Max subarray of [-2,1,-3,4,-1,2,1,-5,4] is 6', () => {
  expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6)
})

test('Max subarray of [0] is 0', () => {
  expect(maxSubArray([0])).toBe(0)
})

test('Max subarray of [1] is 1', () => {
  expect(maxSubArray([1])).toBe(1)
})

test('Max subarray of [-2] is -2', () => {
  expect(maxSubArray([-2])).toBe(-2)
})

test('Max subarray of [-100000] is -100000', () => {
  expect(maxSubArray([-100000])).toBe(-100000)
})
