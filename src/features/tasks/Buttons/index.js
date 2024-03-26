import { Tasksbuttons } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { toggleHideDone, tasksSelector } from "../../tasksSlice";

const Buttons = ({setAllDone }) => {

    const dispatch = useDispatch()
    const {tasks, hideDone} = useSelector(tasksSelector)

    return (
        <div>
            {tasks.length > 0 && (
                <>
                    <Tasksbuttons onClick={()=> dispatch(toggleHideDone())}>
                        {hideDone  ? "Pokaż ukończone" : "Ukryj ukończone"}
                    </Tasksbuttons>
                    <Tasksbuttons
                        $primary
                        onClick={setAllDone}
                        disabled={tasks.every(({ done }) => done)}>
                        Ukończ wszystkie
                    </Tasksbuttons>
                </>
            )}
        </div >
    );
}

export default Buttons;