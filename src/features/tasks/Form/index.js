import { useState, useRef } from 'react'
import { AddNewTaskButton, FormContent, FormInput } from './styled';

const Form = (props) => {
    const inputRef = useRef()
    const [newTaskContent, setNewTaskContent] = useState("");
    const newTaskContentTrimed = newTaskContent.trim()

    const setFocusOnInput = () => {
        inputRef.current.focus();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskContentTrimed === "")
            return

        props.addNewTask(newTaskContentTrimed);
        setNewTaskContent("");
    };

    return (
        <FormContent onSubmit={onFormSubmit}>
            <FormInput
                ref={inputRef} 
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <AddNewTaskButton onClick={()=> setFocusOnInput()}>Dodaj zadanie</AddNewTaskButton>
        </FormContent>
    );
};

export default Form;


