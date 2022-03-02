import Header from "./componenet/Header";
import Tasks from "./componenet/Tasks";
import React, {useEffect, useState} from "react";
import AddFrom from "./componenet/AddFrom";
import About from "./componenet/About";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from "./componenet/Footer";

function App() {
    const [showAdd,setShowAdd]=useState(false);
    const [tasks, setTasks] = useState([]);
    useEffect(()=>{

        fetchTask().then((value)=>{
            setTasks(value);
        });
    },[])
    const fetchTask=async ()=>{
        const res=await fetch('http://localhost:5000/tasks');
      return await res.json();

    }
    const removeTask =async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})

        setTasks(tasks.filter((task) => task.id !== id));
    }


    const changeReminder =async (id) => {
        let newTask=tasks.find((task)=>{
            return task.id===id;
        });
        // console.log(newTask);
        newTask.reminder=!newTask.reminder;
        console.log(newTask);
        await fetch(`http://localhost:5000/tasks/${id}`,{method:'PUT',body:JSON.stringify(newTask),
            headers:{
                'Content-type':'Application/json'


            }})

        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: task.reminder} : task));
    }


    const addNewTask = async(task) => {
        await fetch(`http://localhost:5000/tasks`,{method:'POST',body:JSON.stringify(task),
            headers:{
            'Content-type':'Application/json'


            }})

        const  id=Math.random()*10000+tasks.length;
        task.id=id;
        setTasks([...tasks,task]);
    }

    const  changeShowAdd=()=>{
        setShowAdd(!showAdd);
    }

    return (
        <Router>
            <div className="container">
                <Header changeShowAdd={changeShowAdd} showAdd={showAdd} />
                <Routes>
                    <Route path={'/'} element={
                        <>
                            {showAdd&&<AddFrom  addNewTask={addNewTask}  />}
                            <Tasks tasks={tasks} removeTask={removeTask} changeReminder={changeReminder}/>
                        </>
                    }/>
                    <Route path={'/about'} element={<About/>} />


                </Routes>

                <Footer/>

            </div>
        </Router>
    );
}

export default App;
