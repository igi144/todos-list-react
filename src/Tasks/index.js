import "./style.css";
import { TaskList, TasksItems, Content, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <TaskList>
        {tasks.map(task => (
            <TasksItems
                key={task.id}
                hidden={task.done && hideDone}
            >
                <Button
                    $toggleButton
                    onClick={() => toggleTaskDone(task.id)}>
                    {task.done ? "✓" : ""}
                </Button>
                <Content $taskDone={task.done}>
                    {task.content}
                </Content>
                <Button
                    $removeButton
                    onClick={() => removeTask(task.id)}>
                    🗑
                </Button>
            </TasksItems>
        ))}
    </TaskList>
);

export default Tasks;