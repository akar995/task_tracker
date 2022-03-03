import Header from "./componenet/Header";
import Tasks from "./componenet/Tasks";
import React, {useEffect, useState} from "react";
import AddFrom from "./componenet/AddFrom";
import About from "./componenet/About";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from "./componenet/Footer";
import {useSelector} from "react-redux";
import taskStore from "./controller/radux/Store";
import * as Actions from './controller/radux/Actions'

function App() {
    const { showAdd} = useSelector((state) => state.taskReducer) ?? []
    useEffect(() => {
        fetchTask().then((value) => {
            taskStore.dispatch({type: Actions.GET_TASKS, payload: value})
        });
    }, [])
    const fetchTask = async () => {
        const res = await fetch('http://localhost:5000/tasks');
        return await res.json();
    }
    return (
        <Router>
            <div className="container">
                <Header/>
                <Routes>
                    <Route path={'/'} element={
                        <>
                            {showAdd && <AddFrom/>}
                            <Tasks/>
                        </>
                    }/>
                    <Route path={'/about'} element={<About/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}
export default App;
