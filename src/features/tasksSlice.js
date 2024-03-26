import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: []
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        }
    }
})

export const {addTask} = tasksSlice.actions
export const tasksSelector = state => state.tasks
export const tasksReducer = tasksSlice.reducer



