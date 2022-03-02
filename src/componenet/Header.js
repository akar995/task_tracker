import React, {Component} from "react";
import Button from "./button";
import {useLocation} from 'react-router-dom'
import PropTypes from "prop-types";

const Header = ({title,showAdd, changeShowAdd}) => {

    return (<div className={"header"}>

        <h1>{title}</h1>
        {useLocation().pathname==='/'&&<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'CLOSE' : 'ADD'} onClick={changeShowAdd}/>}

    </div>)
}
Header.defaultProps = {
    title: "Task Tracker"

}
Header.prototype = {
    title: PropTypes.string.isRequired,
}
// class  Header extends Component{
//     render(){
//         return <h1>sadsadasd</h1>
//     }
// }

export default Header