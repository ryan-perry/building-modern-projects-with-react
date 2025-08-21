import { createSlice } from '@reduxjs/toolkit';
import { loadingCompleted } from './loadingSlice';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [],
  },
  reducers: {
    createTodo: (state, action) => {
      const text = action.payload;

      state.value = [
        ...state.value,
        {
          text,
          isCompleted: false,
        },
      ];
    },
    markAsCompleted: (state, action) => {
      const text = action.payload;
      const todo = state.value.find((t) => t.text === text);

      todo.isCompleted = true;
    },
    deleteTodo: (state, action) => {
      const text = action.payload;
      state.value = state.value.filter((t) => t.text !== text);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadingCompleted, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const { createTodo, markAsCompleted, deleteTodo } = todosSlice.actions;
