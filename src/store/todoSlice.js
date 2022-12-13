import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  todos: [],
  errorData: ''
}

export const getTodos = createAsyncThunk(
  'todo/getTodos',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const responce = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')

      if (!responce.status >= 400) throw new Error('Ошибка получения данных')

      dispatch(setTodos({ arr: responce.data }))
    } catch (error) {
      error.message = 'Ошибка получения данных'
      return rejectWithValue(error.message)
    }
  }
)

export const deleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const responce = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
      })

      if (!responce.status >= 400) throw new Error('Ошибка при удалении todo')

      dispatch(removeDo(id))
    } catch (error) {
      error.message = 'Ошибка при удалении todo'
      return rejectWithValue(error.message)
    }
  }
)

export const addDo = createAsyncThunk(
  'todo/addDo',
  async (text, { rejectWithValue, dispatch }) => {
    try {
      const todo = {
        title: text,
        userId: 1,
        completed: false
      }

      const responce = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      })

      if (!responce.status >= 400) throw new Error('Ошибка при добавлении todo')

      todo.id = 400
      dispatch(addTodo({ todo }))
    } catch (error) {
      error.message = 'Ошибка при добавлении todo'
      return rejectWithValue(error.message)
    }
  }
)

export const readyDo = createAsyncThunk(
  'todo/readyDo',
  async (todo, { rejectWithValue, dispatch }) => {
    try {
      const responce = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      })

      if (!responce.status >= 400) throw new Error('Ошибка при изменении статуса todo')

      dispatch(settingDo(todo))
    } catch (error) {
      error.message = 'Ошибка при изменении статуса todo'
      return rejectWithValue(error.message)
    }
  }
)

function todoError(state, action) {
  state.errorData = action.payload
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodos(state, action) {
      state.todos = action.payload.arr
    },
    removeDo(state, action) {
      state.todos = state.todos.filter(item => item.id !== action.payload)
    },
    addTodo(state, action) {
      state.todos.push(action.payload.todo)
    },
    settingDo(state, action) {
      state.todos.forEach(item => {
        if (action.payload.id === item.id)
          item.completed = action.payload.completed
      })
    }
  },
  extraReducers: {
    [getTodos.rejected]: todoError,
    [deleteTodo.rejected]: todoError,
    [addDo.rejected]: todoError
  }
})

export default todoSlice.reducer
export const { setTodos, removeDo, addTodo, settingDo } = todoSlice.actions