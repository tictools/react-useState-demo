export const TodoForm = ({ onCreateTask }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const title = formData.get("title");
    const description = formData.get("description");
    const status = formData.get("status");

    const newTodo = {
      id: Date.now(),
      title: title,
      description: description,
      status: status,
    };

    onCreateTask(newTodo);

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" name="title" placeholder="Title" required />
        <textarea name="description" placeholder="Description" rows="3" />
        <select name="status" defaultValue="pending">
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit">Add Todo</button>
      </div>
    </form>
  );
};
