export default function TodoListItem({ todo, onCompletedClicked, onDeleteClicked }) {
  return (
    <div>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete</p>}
      {todo.isCompleted ? (
        <button
          type="button"
          onClick={() => onDeleteClicked(todo.text)}>
          Delete Item
        </button>
      ) : (
        <button
          type="button"
          onClick={() => onCompletedClicked(todo.text)}>
          Mark as Complete
        </button>
      )}
    </div>
  );
}
