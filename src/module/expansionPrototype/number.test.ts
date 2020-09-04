import {
  accAdd,
  accSub,
  accMul,
  accDiv
} from './number'

test('accAdd: adds 0.1 + 0.2 to equal 0.3', () => {
  expect(accAdd(0.1, 0.2)).toBe(0.3)
})

test('accSub: adds 1.5 - 1.2 to equal 0.3', () => {
  expect(accSub(1.5, 1.2)).toBe(0.3)
})

test('accMul: adds 19.9 * 100 to equal 1990', () => {
  expect(accMul(19.9, 100)).toBe(1990)
})

test('accDiv: adds 0.3 / 0.1 to equal 3', () => {
  expect(accDiv(0.3, 0.1)).toBe(3)
})
