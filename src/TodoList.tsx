import TodoItem from "./TodoItem.tsx";
import type { Task } from "./types";

function TodoList ({tasks}) {

    return (
        <ul>
            {tasks.map(el => (
                <TodoItem
                    key = {el.id}
                    task = {el}
                />
                )
            )}
        </ul>
    );
}

export default TodoList;
