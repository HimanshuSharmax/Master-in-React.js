import { createSlice,nanoid } from "@reduxjs/toolkit";  // nanoid -> unqiue key generate

const initialState = {
     todos: [{ id:1, text:"todo 1"}]
}

export const todoSlice = createSlice({
     name: 'todo',
     initialState,
     reducers: {
          // property and func (state, action)
          addTodo: (state,action) => {
               const todo = {
                    id: nanoid(),
                    text: action.payload
               }
               state.todos.push(todo)
          },
          removeTodo: (state,action) => {
               state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
          },
     }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer

