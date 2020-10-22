import { assertStrictEquals } from 'https://deno.land/std@0.74.0/testing/asserts.ts'
import {
  isDeno,
  isBrowser,
  isWebWorker,
  isNode,
  isElectron,
  isElectronMain,
  isElectronRenderer,
  isJsDom,
} from '../src/index.ts'

declare const Deno: any

Deno.test('isDeno', () => {
  assertStrictEquals(isDeno(), true)
})

Deno.test('isBrowser', () => {
  assertStrictEquals(isBrowser(), false)
})

Deno.test('isWebWorker', () => {
  assertStrictEquals(isWebWorker(), false)
})

Deno.test('isNode', () => {
  assertStrictEquals(isNode(), false)
})

Deno.test('isElectron', () => {
  assertStrictEquals(isElectron(), false)
})

Deno.test('isElectronMain', () => {
  assertStrictEquals(isElectronMain(), false)
})

Deno.test('isElectronRenderer', () => {
  assertStrictEquals(isElectronRenderer(), false)
})

Deno.test('isJsDom', () => {
  assertStrictEquals(isJsDom(), false)
})
