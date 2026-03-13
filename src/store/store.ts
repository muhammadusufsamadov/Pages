import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from '../reducers/counter'

export default configureStore({
  reducer: {
    counter: counterSlice
  }
})
