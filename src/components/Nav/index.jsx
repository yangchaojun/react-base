import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/mine">Mine</Link></li>
            <li><Link to="/mine/ucenter">UCenter</Link></li>
        </ul>
    )
}

export default Nav