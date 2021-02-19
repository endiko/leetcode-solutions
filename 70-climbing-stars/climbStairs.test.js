const climbStairs = require('./climbStairs')

test('If n = 3, it takes 3 steps', () => {
  expect(climbStairs(3)).toBe(3)
})

test('If n = 15, it takes 987 steps', () => {
  expect(climbStairs(15)).toBe(987)
})
