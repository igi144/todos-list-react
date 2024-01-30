import "./style.css";
import { TaskList, TasksItems } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <TaskList>
        {tasks.map(task => (
            <TasksItems key={task.id}
                hidden = {task.done && hideDone}
            >
                <button
                    className="toggleButton"
                    onClick={() => toggleTaskDone(task.id)}>
                    {task.done ? "✓" : ""}
                </button>
                <span className={`${task.done ? "tasks__contentDone " : ""}`}>
                    {task.content}
                </span>
                <button
                    className="removeButton"
                    onClick={() => removeTask(task.id)}>
                    🗑
                </button>
            </TasksItems>
        ))}
    </TaskList>
);

export default Tasks;