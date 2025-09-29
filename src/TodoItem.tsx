import type { Task } from './types.ts';

function TodoItem ({ task, onToggle, onDelete }: {
    task: Task;
    onToggle: (text: string) => void;
    onDelete: (id: string) => void
}) {

    const handleDeleteClick = (e) => {
        e.preventDefault();
        onDelete(task.id);
    }

    return (
        <li>
            <div>{task.text}</div>
            <input
                type="checkbox"
                checked={task.done}
                onChange={() => onToggle(task.id)}
            />
            <button
                type="button"
                onClick={handleDeleteClick}
            >Удалить</button>
        </li>
    );
}

export default TodoItem;
