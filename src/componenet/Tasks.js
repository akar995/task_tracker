import React, {useState} from "react";
import Task from './Task';
import {useSelector} from "react-redux";

const Tasks = () => {
    const {tasks,} = useSelector((state) => state.taskReducer) ?? []
    return (<React.Fragment>
            {tasks.map((task) => (<Task key={task.id} task={task}/>))}
        </React.Fragment>
    )
}
export default Tasks