import {FaTimes} from 'react-icons/fa';
import React from "react";


const Task = ({task, removeTask,changeReminder}) => {
    return (
        <div className={`task ${task.reminder ?'reminder':''}`}  onDoubleClick={()=>changeReminder(task.id)}>
            <h3>
                {task.text} <FaTimes  onClick={(e) => {
                removeTask(task.id);
            }} style={{color: 'red', cursor: 'pointer'}}/>
            </h3>
            <p>{task.day}</p>

        </div>
    )
}
export default Task;