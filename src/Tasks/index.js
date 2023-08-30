import "./style.css"

const Tasks = ({tasks, hideDoneTasks}) => (
    <ul className="tasksList">
        {tasks.map(task => (
            <li key={task.id}
                className={`tasks__item  ${task.done && hideDoneTasks
                        ? "tasksHide"
                        : ""}`}
            >
                <button className="js-toggleButton toggleButton ">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`${task.done ? "tasks__contentDone " : ""}`}>
                    {task.content}
                </span>
                <button className="js-removeButton removeButton">
                    🗑
                </button>
            </li>
        ))}

    </ul>

)

export default Tasks;