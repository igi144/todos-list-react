import "./style.css";

const Form = () => (
    <form className="form">
        <input className="formInput" autoFocus placeholder="Co jest do zrobienia?"/>
        <button className="newTaskButton">Dodaj zadanie</button>
    </form>
);

export default Form;


