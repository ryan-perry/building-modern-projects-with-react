import { useDispatch } from 'react-redux';
import { markTodoAsCompleted, deleteTodo } from './thunks';

export default function TodoListItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete</p>}
      {todo.isCompleted ? (
        <button
          type="button"
          onClick={() => dispatch(deleteTodo(todo.id))}>
          Delete Item
        </button>
      ) : (
        <button
          type="button"
          onClick={() => dispatch(markTodoAsCompleted(todo.id))}>
          Mark as Complete
        </button>
      )}
    </div>
  );
}
