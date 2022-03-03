import * as Actions from './Actions.js'


let initValues = {
    tasks: [],
    showAdd: false
}

function taskReducer(state = initValues, action) {
    switch (action.type) {
        case Actions.SHOW_ADD:
            return {
                ...state, showAdd: !state.showAdd
            }
        case Actions.GET_TASKS:
            console.log(action.payload);
            return {
                ...state,
                tasks: action.payload
            }
        case Actions.ADD_TASK:


            return {
                ...state,
                tasks:
                    [action.payload, ...state.tasks]
            }
        case Actions.UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload ? {...task, reminder: task.reminder} : task)
            }
        case Actions.REMOVE_TASK:
            return {...state, tasks: state.tasks.filter((task) => task.id !== action.payload)}

        default:
            return state;

    }
}

export default taskReducer;