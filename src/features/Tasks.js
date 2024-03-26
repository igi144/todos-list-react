import Form from "./tasks/Form";
import TasksList from "./tasks/TasksList";
import Buttons from "./tasks/Buttons";
import Section from "../common/Section";
import Header from "../common/Header";
import { useState } from 'react';
import { useTasks } from "../useTasks";
import { GlobalStyle } from "../myGlobalStyle";
import { useSelector } from "react-redux";
import { tasksSelector } from "./tasksSlice";

function Tasks() {

  const {tasks} = useSelector(tasksSelector)

  const [hideDone, setHideDone] = useState(false);
  const { removeTask, toggleTaskDone, setAllDone, addNewTask, } = useTasks();
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  return (
    <>
      <GlobalStyle />
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form
          addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <TasksList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </>
  );
};

export default Tasks;
