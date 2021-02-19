const longestCommonPrefix = require('./longestCommonPrefix')

test('The longest common prefix in ["flower", "flow", "flight"] is fl', () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe('fl')
})
test('The longest common prefix in [""] is empty string', () => {
  expect(longestCommonPrefix([""])).toBe('')
})
test('The longest common prefix in ["flower","flower","flower"] is flower', () => {
  expect(longestCommonPrefix(["flower","flower","flower"])).toBe('flower')
})
test('The longest common prefix in ["abab","aba",""] is empty string', () => {
  expect(longestCommonPrefix(["abab","aba",""])).toBe('')
})
test('The longest common prefix in ["dog","racecar","car"] is empty string', () => {
  expect(longestCommonPrefix(["dog","racecar","car"])).toBe('')
})
test('The longest common prefix in [] is empty string', () => {
  expect(longestCommonPrefix([])).toBe('')
})
