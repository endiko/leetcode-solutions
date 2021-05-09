const {test, expect} = require('@jest/globals');
const groupAnagrams = require('./groupAnagrams');

test(`['aabbdd', 'abdabd', 'ddbx', 'dddd', 'xdbd'] should return [ [ 'aabbdd', 'abdabd' ], [ 'ddbx', 'xdbd' ], [ 'dddd' ] ]`, () => {
  expect(groupAnagrams(['aabbdd', 'abdabd', 'ddbx', 'dddd', 'xdbd'])).toEqual([[ 'aabbdd', 'abdabd' ], [ 'ddbx', 'xdbd' ], [ 'dddd' ]]);
})
