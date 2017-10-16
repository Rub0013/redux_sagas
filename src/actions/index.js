import { ADD_TASK, DELETE_TASK } from './types'


let nextTodoId = 0;
export const addTask = text => {
    return {
        type: ADD_TASK,
        id: nextTodoId++,
        text
    }
};

export function deleteTask(data) {
    return { type: DELETE_TASK, data }
}

