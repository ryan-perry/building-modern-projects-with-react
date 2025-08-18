import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [completedTodos, setCompletedTodos] = useState([
    {
      text: 'Take out the garbage',
      isCompleted: true,
    },
    {
      text: 'Make dinner',
      isCompleted: true,
    },
  ]);
  const [incompletedTodos, setIncompletedTodos] = useState([
    {
      text: 'Pain the house',
      isCompleted: false,
    },
  ]);

  return (
    <>
      <TodoList
        completedTodos={completedTodos}
        incompleteTodos={incompletedTodos}
      />
    </>
  );
}

export default App;
