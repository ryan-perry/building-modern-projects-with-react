import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [],
  },
  reducers: {
    createTodo: (state) => state,
    markAsCompleted: (state) => state,
    deleteTodo: (state) => state,
  },
});
