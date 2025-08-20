import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from './todosSlice';

export default function NewTodoForm() {
  const [inputText, setInputText] = useState('');

  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          dispatch(createTodo(inputText));
          // set text to empty string
          setInputText('');
        }}>
        Create Todo
      </button>
    </div>
  );
}
