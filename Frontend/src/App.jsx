import { useState, useEffect } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        try {
          const json = await res.json();
          setTodos(json.todos || []);
        } catch (error) {
          console.error("Failed to parse JSON:", error);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);
  

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
