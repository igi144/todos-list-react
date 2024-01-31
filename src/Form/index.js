import { useState } from 'react'
import { AddNewTaskButton, FormContent, FormInput } from './styled';

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
        <FormContent onSubmit={onFormSubmit}>
            <FormInput
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <AddNewTaskButton>Dodaj zadanie</AddNewTaskButton>
        </FormContent>
    );
};

export default Form;


