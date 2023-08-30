import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="tasksButtons">
        {tasks.length > 0 && (
            <>
                <button className="tasksButtons">
                    {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
                </button>
                <button
                    className="tasksButtons button__completeAll"
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div >
);

export default Buttons;