import { useTodos } from "../hooks/useTodos";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export function TodoListContainer() {
  const { todos, handleCreateTask } = useTodos();

  return (
    <div className="todo-list">
      <TodoForm onCreateTask={handleCreateTask} />
      <TodoList todosList={todos} />
    </div>
  );
}
