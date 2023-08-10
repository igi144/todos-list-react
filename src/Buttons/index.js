import React from "react"
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (

    <div className="tasksButtons">
        {tasks.length > 0 && (
            <React.Fragment>
                <button className="tasksButtons">
                    {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
                </button>
                <button
                    className="tasksButtons button__completeAll"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </React.Fragment>
        )}
    </div >


);



export default Buttons