import { Tasksbuttons } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { toggleHideDone, setAllDone, selectTasksState,} from "../../tasksSlice";

const Buttons = () => {
    const dispatch = useDispatch()
    const { tasks, hideDone } = useSelector(selectTasksState)

    return (
        <div>
            {tasks.length > 0 && (
                <>
                
                    <Tasksbuttons onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                    </Tasksbuttons>
                    <Tasksbuttons
                        $primary
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}>
                        Ukończ wszystkie
                    </Tasksbuttons>
                </>
            )}
        </div >
    );
}

export default Buttons;