import { List, Items, Content, Button } from "./styled";

const TasksList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Items
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
            </Items>
        ))}
    </List>
);

export default TasksList;