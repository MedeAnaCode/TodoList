import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import Filter from "./Filter.tsx";
import TodoList from "./TodoList.tsx";
import TodoForm from "./TodoForm.tsx";
import type { Task, FilterPattern } from "./types";

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState<FilterPattern>('all');

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

    const onFilterChange = (next: FilterPattern) => {setFilter(next)};

    const visibleTasks =
        filter === 'active' ? tasks.filter(el => !el.done)
        : filter === 'done' ? tasks.filter(el =>  el.done)
        : tasks;

  return (
    <>
      <Filter
          value={filter}
          onChange={onFilterChange}
      />
      <TodoList
          tasks={visibleTasks}
          onToggle={onToggle}
          onDelete={onDelete}
      />
      <TodoForm onAdd={onAdd}/>
    </>
  )
}

export default App;
