import {configureStore} from '@reduxjs/toolkit'
import todoSlice from '../feature/Todo/todoSlice'

export const store = configureStore({
     reducer: todoSlice
})


