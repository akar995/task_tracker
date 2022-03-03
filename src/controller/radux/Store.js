import rootReducer from "./RootReducer";
import {createStore} from "redux";

const taskStore = createStore(rootReducer)

export default taskStore