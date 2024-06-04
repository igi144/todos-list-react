import {  useParams } from "react-router-dom/cjs/react-router-dom.min";
import Section from "../../../common/Section";
import { GlobalStyle } from "../../../myGlobalStyle";
import Header from "../../../common/Header";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

export const TaskPage = () => {
  const {id} = useParams()
  
  const task = useSelector((state)=> getTaskById(state, id) )

 
  return (
    <>
      <Header title="Szczegóły zadania" />
      <GlobalStyle />
      <Section
        title={task ? task.content : "Nie znaleziono zadania 😒"}
        body={<><strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}</>}
      />
    </>
  )
}