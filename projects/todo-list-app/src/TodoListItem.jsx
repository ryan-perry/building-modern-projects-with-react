import { useDispatch } from 'react-redux';
import { markAsCompleted, deleteTodo } from './todosSlice';

export default function TodoListItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete</p>}
      {todo.isCompleted ? (
        <button
          type="button"
          onClick={() => dispatch(deleteTodo(todo.text))}>
          Delete Item
        </button>
      ) : (
        <button
          type="button"
          onClick={() => dispatch(markAsCompleted(todo.text))}>
          Mark as Complete
        </button>
      )}
    </div>
  );
}
