import { useSelector } from "react-redux"
import { Wrapper } from "./styled"
import { getTaskById } from "../../tasksSlice"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"



export  const TaskPageContent = () => {

    const { id } = useParams()
    const task = useSelector((state) => getTaskById(state, id))

    if (task) {
      return <Wrapper><strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}</Wrapper>
    }
    else {
      return ""
    }
  }