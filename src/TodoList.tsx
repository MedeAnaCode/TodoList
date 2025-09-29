import TodoItem from "./TodoItem.tsx";
import type { Task } from "./types";

function TodoList ({ tasks, onToggle }: { tasks: ReadonlyArray<Task>; onToggle: (id: string) => void}) {

    return (
        <ul>
            {tasks.map(el => (
                <TodoItem
                    key = {el.id}
                    task = {el}
                    onToggle={onToggle}
                />
                )
            )}
        </ul>
    );
}

export default TodoList;
