import {useState} from "react";

function TodoForm () {
    const [newTask, setNewTask] = useState('');

    return (
        <>
            <label>
                Новая задача:
                <input
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
            </label>
            <button
                type={"button"}
            >Добавить</button>
        </>
    );
}

export default TodoForm;
