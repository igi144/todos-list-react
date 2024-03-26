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
        }
    }
})

export const { addTask, toggleHideDone, setAllDone } = tasksSlice.actions
export const tasksSelector = state => state.tasks
export const tasksReducer = tasksSlice.reducer



