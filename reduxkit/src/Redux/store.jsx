import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer  
  },
})

// steps
// create store
// wrap app components
// create Slice
// register reducer in sore