import {useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import Filter from "./Filter.tsx";
import TodoList from "./TodoList.tsx";
import TodoForm from "./TodoForm.tsx";
import type { Task } from "./types";

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const onAdd = (textMessage: string) => {
        const newTask: Task = {
            id: uuidv4(),
            text: textMessage,
            done: false,
        };

        setTasks(prev => [...prev, newTask]);
    };

    const onDelete = (soughtId: string) => {
        setTasks(prev => prev.filter(el => el.id !== soughtId));
    };

    const onToggle = (soughtId: string) => {
        setTasks(prev =>
            prev.map(el => (el.id === soughtId ? { ...el, done: !el.done } : el))
        );
    };

  return (
    <>
      <Filter/>
      <TodoList
          tasks={tasks}
          onToggle={onToggle}
          onDelete={onDelete}
      />
      <TodoForm onAdd={onAdd}/>
    </>
  )
}

export default App;
