import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "./saveLocalStorage";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getLocalStorage(),
        hideDone: false
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        },

        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone
        },

        setAllDone: (state) => {
            state.tasks = state.tasks.map(task => ({
                ...task,
                done: true
            }))
        },

        toggleDoneTask: (state, action) => {
            const index = state.tasks.findIndex(taskId => taskId.id === action.payload)
            state.tasks[index].done = !state.tasks[index].done
        },

        removeTask: (state, action) => {
            const index = action.payload
            state.tasks = state.tasks.filter(task => task.id !== index)
        },

        fetchExampleTasks: () => { },

        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks
        },

    }
});



export const {
    addTask,
    toggleHideDone,
    setAllDone,
    toggleDoneTask,
    removeTask,
    fetchExampleTasks,
    setTasks } = tasksSlice.actions

export const tasksReducer = tasksSlice.reducer

export const selectTasksState = state => state.tasks
export const selectTasks = state => selectTasksState(state).tasks
export const selectHideDone = state => selectTasksState(state).hideDone
export const isTasksEmpty = state => selectTasks(state).length === 0
export const isAllTasksDone = state => selectTasks(state).every(({ done }) => done)

export const getTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId)
export const selectTaskByQuery = (state, query) => {
    const tasks = selectTasks(state)
    if (!query || query.trim() === "") {
        return tasks
    }

    return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()))
}





