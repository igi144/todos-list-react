import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
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
        }
    }
})



export const { addTask, toggleHideDone, setAllDone, toggleDoneTask, removeTask  } = tasksSlice.actions
export const tasksSelector = state => state.tasks
export const tasksReducer = tasksSlice.reducer



