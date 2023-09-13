import "./style.css";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDone, setAllDone }) => (
    <div className="tasksButtons">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="tasksButtons">
                    {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
                </button>
                <button
                    onClick={setAllDone}
                    className="tasksButtons button__completeAll"
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div >
);

export default Buttons;