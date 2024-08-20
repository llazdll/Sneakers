import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import ModalReducer from './ModalSlice'
export const store = configureStore({
    reducer: { counter: counterReducer,modal:ModalReducer }
})