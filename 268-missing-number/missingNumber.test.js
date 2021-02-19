const missingNumber = require('./missingNumber')

test('In [3, 0, 1] the missing number is 2', () => {
  expect(missingNumber([3,0,1])).toBe(2)
})

test('In [0, 1] the missing number is 2', () => {
  expect(missingNumber([0, 1])).toBe(2)
})

test('In [9,6,4,2,3,5,7,0,1] the missing number is 8', () => {
  expect(missingNumber([9,6,4,2,3,5,7,0,1])).toBe(8)
})

test('In [0] the missing number is 1', () => {
  expect(missingNumber([0])).toBe(1)
})

test('In [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14] the missing number is 18', () => {
  expect(missingNumber([45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14])).toBe(18)
})
