export function TodoItem({ item }) {
  return (
    <li className="todo-item">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <span className={`status ${item.status}`}>{item.status}</span>
    </li>
  );
}
