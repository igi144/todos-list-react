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

        toggleDoneTask: (state, action) => {

        }
    }
})

export const { addTask, toggleHideDone } = tasksSlice.actions
export const tasksSelector = state => state.tasks
export const tasksReducer = tasksSlice.reducer



