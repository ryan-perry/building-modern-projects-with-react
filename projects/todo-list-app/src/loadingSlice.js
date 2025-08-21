import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    value: {
      completed: true,
      successful: false,
    },
  },
  reducers: {
    loadingStarted: (state) => {
      state.value.completed = false;
      state.value.successful = false;
    },
    loadingCompleted: (state) => {
      state.value.completed = true;
      state.value.successful = true;
    },
    loadingFailed: (state) => {
      state.value.completed = true;
      state.value.successful = false;
    },
  },
});

export const { loadingCompleted, loadingFailed, loadingStarted } = loadingSlice.actions;
