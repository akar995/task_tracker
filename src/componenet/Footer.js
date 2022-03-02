import {Link} from 'react-router-dom'

const Footer=()=>{
    return <div>
        <p>Task Tracker version 0.0.1</p>
        <Link to={'/about'}>About us</Link>
    </div>
}
export  default Footer;