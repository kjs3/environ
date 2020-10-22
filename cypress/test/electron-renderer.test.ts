import {
  isDeno,
  isBrowser,
  isWebWorker,
  isNode,
  isElectron,
  isElectronMain,
  isElectronRenderer,
  isJsDom,
} from '../../src'

it('isBrowser', () => {
  expect(isBrowser()).to.equal(true)
})

it('isWebWorker', () => {
  expect(isWebWorker()).to.equal(false)
})

it('isNode', () => {
  expect(isNode()).to.equal(false)
})

it('isElectron', () => {
  expect(isElectron()).to.equal(true)
})

it('isElectronMain', () => {
  expect(isElectronMain()).to.equal(false)
})

it('isElectronRenderer', () => {
  expect(isElectronRenderer()).to.equal(true)
})

it('isDeno', () => {
  expect(isDeno()).to.equal(false)
})

it('isJsDom', () => {
  expect(isJsDom()).to.equal(false)
})
