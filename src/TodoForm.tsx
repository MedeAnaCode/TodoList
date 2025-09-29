import {useState} from "react";

const NOT_EMPTY = /\S/;

function TodoForm ({ onAdd }: { onAdd: (text: string) => void}) {
    const [newTask, setNewTask] = useState<string>('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (NOT_EMPTY.test(newTask)) {
            onAdd(newTask);
            setNewTask('');
        } else {
            alert('Поле ввода пустое.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Новая задача:
                <input
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
            </label>
            <button
                type={"submit"}
            >Добавить</button>
        </form>
    );
}

export default TodoForm;
