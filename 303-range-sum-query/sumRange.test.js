const numArr = require('./sumRange')

test('Range of sum query (0, 2) is 1', () => {
  expect(numArr.sumRange(0, 2)).toBe(1)
})
test('Range of sum query (2, 5) is -1', () => {
  expect(numArr.sumRange(2, 5)).toBe(-1)
})
test('Range of sum query (0, 5) is -3', () => {
  expect(numArr.sumRange(0, 5)).toBe(-3)
})
