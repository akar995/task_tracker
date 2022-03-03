import React from "react";
import Button from "./button";
import {useLocation} from 'react-router-dom'
import PropTypes from "prop-types";
import taskStore from "../controller/radux/Store";
import * as Actions from "../controller/radux/Actions";
import {useSelector} from "react-redux";

const Header = ({title,}) => {
    const {showAdd} = useSelector((state) => state.taskReducer) ?? []
    const changeShowAdd = () => {
        taskStore.dispatch({type: Actions.SHOW_ADD})
    }
    return (<div className={"header"}>
        <h1>{title}</h1>
        {useLocation().pathname === '/' &&
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'CLOSE' : 'ADD'} onClick={changeShowAdd}/>}
    </div>)
}
Header.defaultProps = {
    title: "Task Tracker"

}
Header.prototype = {
    title: PropTypes.string.isRequired,
}


export default Header