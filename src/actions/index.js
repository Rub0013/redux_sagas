import { ADD_TASK, DELETE_TASK } from './types'

let nextTodoId = 0;
export const addTask = text => {
    return {
        type: ADD_TASK,
        id: nextTodoId++,
        text
    }
};

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    id
});

