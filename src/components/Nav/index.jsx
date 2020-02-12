import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const Nav = () => {
    return (
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/mine">Mine</Link></li>
            <li><Link to="/mine/ucenter">UCenter</Link></li>
            <li><Link to="/redux-react-demo-optimise">ReactReduxDemoOptimise</Link></li>
            <li><Link to="/user-num">UserNum</Link></li>
        </ul>
    )
}

export default Nav