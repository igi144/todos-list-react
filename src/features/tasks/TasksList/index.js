import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { toggleDoneTask, removeTask, selectHideDone, selectTaskByQuery } from "../tasksSlice";
import { List, Items, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

export const TasksList = () => {

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get("szukaj")

    const tasks = useSelector(state => selectTaskByQuery(state, query))
    const hideDone = useSelector(selectHideDone)
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
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
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
