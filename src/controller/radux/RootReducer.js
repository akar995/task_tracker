import {combineReducers} from "redux";
import taskReducer from "./TaskReducer";

const rootReducer = combineReducers({
    taskReducer: taskReducer
})

export default rootReducer