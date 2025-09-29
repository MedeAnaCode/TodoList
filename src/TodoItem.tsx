import type { Task } from './types.ts';

function TodoItem ({ task, onToggle }: { task: Task; onToggle: (text: string) => void }) {

    return (
        <li>
            <div>{task.text}</div>
            <input
                type={"checkbox"}
                checked={task.done}
                onChange={() => onToggle(task.id)}
            />
            <button type={"button"}>Удалить</button>
        </li>
    );
}

export default TodoItem;
