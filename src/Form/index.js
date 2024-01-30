import { useState } from 'react'
import "./style.css";
import { AddNewTaskButton } from './styled';

const Form = (props) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const newTaskContentTrimed = newTaskContent.trim()

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskContentTrimed === "")
            return

        props.addNewTask(newTaskContentTrimed);
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
            <AddNewTaskButton>Dodaj zadanie</AddNewTaskButton>
        </form>
    );
};

export default Form;


