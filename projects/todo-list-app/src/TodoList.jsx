// import { useSelector } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { useRecoilValue } from 'recoil';
import { todos as todosAtom } from './atoms';

export default function TodoList() {
  // const todos = useSelector((state) => state.todos.value);
  const todos = useRecoilValue(todosAtom);

  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm />
      <h3>Completed:</h3>
      {todos.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo}
        />
      ))}

      <h3>Incomplete:</h3>
      {todos.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo}
        />
      ))}
    </div>
  );
}
