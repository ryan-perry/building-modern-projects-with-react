import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';

export default function TodoList({ completedTodos, incompleteTodos }) {
  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm />
      <h3>Completed:</h3>
      {completedTodos.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo}
        />
      ))}

      <h3>Incomplete:</h3>
      {incompleteTodos.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo}
        />
      ))}
    </div>
  );
}
