import { fetchExampleTasks } from "../../tasksSlice";
import { useDispatch } from "react-redux";
import { ExampleButton } from "../styled";
import { useState } from "react";

export const ExampleTasksButtons = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const setLoadingTrue = () => {
        setLoading(true)
    }
    const setLoadingFalse = () => {
        setLoading(false)
    }

    return (
        <ExampleButton
            onClick={() => {
                setLoadingTrue()
                setTimeout(() => {
                    setLoadingFalse()
                    dispatch(fetchExampleTasks())
                }, 1000)

            }}>
            {!loading ? "Pobierz przykładowe zadania" : "Ładowanie..."}
        </ExampleButton>
    )
}