'use client'

import { createStore } from 'jotai'

const baseStore = createStore()

export const store = Object.assign(baseStore, {
  get: baseStore.get,
  set: baseStore.set,
})
