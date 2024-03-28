import { tasksSelector, toggleDoneTask, removeTask } from "../../tasksSlice";
import { List, Items, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const TasksList = () => {

    const {tasks, hideDone} = useSelector(tasksSelector)
    const dispatch = useDispatch()

    return (
        <List>
            {tasks.map(task => (
                <Items
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        $toggleButton
                        onClick={() => dispatch(toggleDoneTask(task.id))}>
                        {task.done ? "✓" : ""}
                    </Button>
                    <Content $taskDone={task.done}>
                        {task.content}
                    </Content>
                    <Button
                        $removeButton
                        onClick={() => dispatch(removeTask(task.id))}>
                        🗑
                    </Button>
                </Items>
            ))}
        </List>
    );
}

export default TasksList;