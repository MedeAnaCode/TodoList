import TodoItem from "./TodoItem.tsx";
import type { Task } from "./types";

function TodoList ({ tasks, onToggle, onDelete }: {
    tasks: ReadonlyArray<Task>;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void
}) {

    return (
        <ul>
            {tasks.map(el => (
                <TodoItem
                    key = {el.id}
                    task = {el}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
                )
            )}
        </ul>
    );
}

export default TodoList;
