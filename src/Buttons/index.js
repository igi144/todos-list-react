import "./style.css";
import { Tasksbuttons } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDone, setAllDone }) => (
    <div>
        {tasks.length > 0 && (
            <>
                <Tasksbuttons onClick={toggleHideDone}>
                    {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
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

export default Buttons;