import {FaTimes} from 'react-icons/fa';
import React from "react";
import {useSelector} from "react-redux";
import taskStore from "../controller/radux/Store";
import * as Action from '../controller/radux/Actions'

const Task = ({task,}) => {

    const removeTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})

        taskStore.dispatch({
            type: Action.REMOVE_TASK, payload: id
        })
    }

    const {tasks} = useSelector(state => state.taskReducer)
    const changeReminder = async (id) => {
        let newTask = tasks.find((task) => {
            return task.id === id;
        });
        newTask.reminder = !newTask.reminder;
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT', body: JSON.stringify(newTask),
            headers: {
                'Content-type': 'Application/json'
            }
        })
        taskStore.dispatch({
            type: Action.UPDATE_TASK, payload: id
        })
    }
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => changeReminder(task.id)}>
            <h3>
                {task.text} <FaTimes onClick={(e) => {
                removeTask(task.id);
            }} style={{color: 'red', cursor: 'pointer'}}/>
            </h3>
            <p>{task.day}</p>

        </div>
    )
}
export default Task;