import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { todosSlice } from './todosSlice.js';
import { loadingSlice } from './loadingSlice.js';

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    loading: loadingSlice.reducer,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
