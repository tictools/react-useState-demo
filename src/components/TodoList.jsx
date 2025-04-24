import { TodoItem } from "./TodoItem";

export function TodoList({ todosList }) {
  if (todosList.length === 0) {
    return <h3>Empty list</h3>;
  }

  return (
    <>
      <ul>
        {todosList.map((todo) => {
          return <TodoItem key={todo.id} item={todo} />;
        })}
      </ul>
    </>
  );
}
