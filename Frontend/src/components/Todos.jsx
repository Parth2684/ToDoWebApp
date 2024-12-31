export function Todos({ todos }) {
  console.log("Rendering Todos:", todos); // Debug log for todos array
  if (!todos || todos.length === 0) {
    return <div>No Todos Available</div>;
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>{todo.completed ? "Completed" : "Mark as Done"}</button>
        </div>
      ))}
    </div>
  );
}
