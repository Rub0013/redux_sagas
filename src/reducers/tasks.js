import { ADD_TASK, DELETE_TASK } from '../actions/types'

const tasks = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ];
        case DELETE_TASK:
            return state.filter(task => task.id !== action.id);
        default:
            return state
    }
};

export default tasks;