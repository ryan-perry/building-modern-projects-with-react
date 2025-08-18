import "./App.css";
import TodoList from "./TodoList";

function App() {
  return (
    <>
      <TodoList completedTodos={[]} incompleteTodos={[]} />
    </>
  );
}

export default App;
