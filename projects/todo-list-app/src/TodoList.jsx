import { useSelector } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { getCompletedTodos, getIncompleteTodos, getTodosLoading } from './selectors';

export default function TodoList() {
  const todosAreLoading = useSelector(getTodosLoading);
  const completedTodos = useSelector(getCompletedTodos);
  const incompleteTodos = useSelector(getIncompleteTodos);

  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm />
      {todosAreLoading ? (
        <p>Loading..</p>
      ) : (
        <>
          <h3>Completed:</h3>
          {completedTodos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
            />
          ))}

          <h3>Incomplete:</h3>
          {incompleteTodos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
            />
          ))}
        </>
      )}
    </div>
  );
}
