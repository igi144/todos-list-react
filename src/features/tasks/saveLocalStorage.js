export const saveLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
};

export const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("tasks")) || []
};