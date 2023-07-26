import { configureStore } from '@reduxjs/toolkit'
import { CounterSlice } from './slices/Counterslice'

export const store = configureStore({
  reducer: {
    counter: CounterSlice
  },
})