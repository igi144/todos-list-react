import { useEffect, useState } from "react";

export const useTasks = () => {

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