import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
    <ul className="tasksList">
        {tasks.map(task => (
            <li key={task.id}
                className={`tasks__item  ${task.done && hideDone
                    ? "tasksHide"
                    : ""}`}
            >
                <button className="toggleButton ">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`${task.done ? "tasks__contentDone " : ""}`}>
                    {task.content}
                </span>
                <button
                    className="removeButton"
                    onClick={()=> removeTask(task.id)}>
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;