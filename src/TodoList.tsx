import TodoItem from "./TodoItem.tsx";

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
