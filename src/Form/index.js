import { useState } from 'react'
import "./style.css";

const Form = (props) => {

    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        props.addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="formInput"
                autoFocus
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className="newTaskButton">Dodaj zadanie</button>
        </form>
    );
};

export default Form;


