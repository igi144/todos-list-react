import { takeEvery, call, put, select } from "redux-saga/effects"
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice"
import { getExampleTasks } from "./getExampleTasks"
import { saveLocalStorage } from "./saveLocalStorage"

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks)
        yield put(setTasks(exampleTasks))
    }
    catch (error) {
        yield call(alert, "Coś jest nie tak")
    }
}

function* localStorageHandler() {
    const tasks = yield select(selectTasks)
    yield call(saveLocalStorage, tasks)
}

export function* watchFetchExampleTasks() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler)
    yield takeEvery("*", localStorageHandler)
}