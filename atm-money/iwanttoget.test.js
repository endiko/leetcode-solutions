const { test, expect } = require('@jest/globals');
const iWantToGet = require('./iwanttoget');
const limits = {
  1000: 5,
  500: 2,
  100: 5,
  50: 100,
  30: 6
};

test('Amount 230 should return {100: 2, 30: 1}', () => {
  expect(iWantToGet(230, limits)).toEqual({100: 2, 30: 1});
})
test('Amount 1000 should return {1000: 1}', () => {
  expect(iWantToGet(1000, limits)).toEqual({1000: 1});
})
test('Amount 2500 should return {1000: 2, 500: 1}', () => {
  expect(iWantToGet(2500, limits)).toEqual({1000: 2, 500: 1});
})

test('Amount 235 should return undefined', () => {
  expect(iWantToGet(235, limits)).toEqual(undefined);
})

test('Amount 120 should return {30: 4}', () => {
  expect(iWantToGet(120, limits)).toEqual({30: 4});
})
