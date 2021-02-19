const findDisappearedNumbers = require('./findDisappearedNumbers')

test('Disapeared numbers of [4,3,2,7,8,2,3,1] is [5, 6]', () => {
  expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toStrictEqual([5, 6])
})
