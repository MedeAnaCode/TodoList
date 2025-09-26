import type { Task } from './types.ts';

function TodoItem ({ task }: { task: Task }) {

    return (
        <li>
            <div>{task.text}</div>
            <input
                type={"checkbox"}
            />
            <button type={"button"}>Удалить</button>
        </li>
    );
}

export default TodoItem;
