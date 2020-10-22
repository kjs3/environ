import {
  isDeno,
  isBrowser,
  isWebWorker,
  isNode,
  isElectron,
  isElectronMain,
  isElectronRenderer,
  isJsDom,
} from '../src'

test('isBrowser', () => {
  // should this be false? 🤷‍♂️
  expect(isBrowser()).toBe(true)
})

test('isWebWorker', () => {
  expect(isWebWorker()).toBe(false)
})

test('isNode', () => {
  expect(isNode()).toBe(false)
})

test('isElectron', () => {
  expect(isElectron()).toBe(false)
})

test('isElectronMain', () => {
  expect(isElectronMain()).toBe(false)
})

test('isElectronRenderer', () => {
  expect(isElectronRenderer()).toBe(false)
})

test('isDeno', () => {
  expect(isDeno()).toBe(false)
})

test('isJsDom', () => {
  expect(isJsDom()).toBe(true)
})
