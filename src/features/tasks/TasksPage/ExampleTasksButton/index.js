import { fetchExampleTasks, setLoadingFalse, setLoadingTrue } from "../../tasksSlice";
import { useDispatch } from "react-redux";
import { ExampleButton } from "../styled";
import { getLoadingSetting } from "../../tasksSlice";
import { useSelector } from "react-redux";

export const ExampleTasksButtons = () => {
    const dispatch = useDispatch()
    const toggleWord = useSelector(getLoadingSetting)

    return (
        <ExampleButton
            onClick={() => {
                dispatch(setLoadingTrue());
                setTimeout(() => {
                    dispatch(fetchExampleTasks())
                    dispatch(setLoadingFalse())
                }, 1500)
            }
            }
            disabled={!toggleWord ? false : true}
            $primary
        >
            {!toggleWord ? "Pobierz przykładowe zadania" : "Ładowanie..."}
        </ExampleButton>
    )
}