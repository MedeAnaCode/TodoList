import {useState} from "react";
import Filter from "./Filter.tsx";
import TodoList from "./TodoList.tsx";
import TodoForm from "./TodoForm.tsx";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <Filter/>
      <TodoList tasks={tasks}/>
      <TodoForm/>
    </>
  )
}

export default App;
