import React, {useState} from "react";
import Task from './Task';
const  Tasks=({tasks,removeTask,changeReminder})=>{

    return ( <>

            {tasks.map((task)=>(<Task key={task.id} task={task} removeTask={removeTask} changeReminder={changeReminder}/>))}


        </>
    )
}
export  default Tasks