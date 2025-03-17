export function TodoList({ todosList }) {
  if (todosList.length === 0) {
    return <h3>Empty list</h3>;
  }

  return (
    <>
      <ul>
        {todosList.map((todo) => (
          <li key={todo.id} className="todo-item">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <span className={`status ${todo.status}`}>{todo.status}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
