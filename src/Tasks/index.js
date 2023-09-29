import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="tasksList">
        {tasks.map(task => (
            <li key={task.id}
                className={`tasks__item  ${task.done && hideDone
                    ? "tasksHide"
                    : ""}`}
            >
                <button
                    className="toggleButton"
                    onClick={() => toggleTaskDone(task.id)}>
                    {task.done ? "✓" : ""}
                </button>
                <span className={`${task.done ? "tasks__contentDone " : ""}`}>
                    {task.content}
                    <p>test</p> 
                </span>
                <button
                    className="removeButton"
                    onClick={() => removeTask(task.id)}>
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;