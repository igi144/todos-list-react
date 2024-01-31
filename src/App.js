import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState, useEffect } from 'react';

const useTasks = () => {

  const setLocalStorage = () => {
    const localTasksStorage = JSON.parse(localStorage.getItem("tasksStorage"))

    if (localTasksStorage === null) {
      return [
        { content: "Zrobić zadanie z modułu 10", done: true, id: 1 },
        { content: "Zjeść kolację", done: false, id: 2 },
      ]
    }

    return localTasksStorage
  };

  const [tasks, setTasks] = useState(setLocalStorage);

  useEffect(() => {
    localStorage.setItem("tasksStorage", JSON.stringify(tasks))
  }, [tasks])

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1
      },
    ]);
  };

  return { removeTask, toggleTaskDone, setAllDone, addNewTask, tasks }
};

function App() {
  const [hideDone, setHideDone] = useState(false);
  const { removeTask, toggleTaskDone, setAllDone, addNewTask, tasks } = useTasks()
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form
          addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks
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
    </Container>
  );
};

export default App;
