import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';

function NavBar () {

    return (
        <nav>
            <div>
                <div className="logo">placeholder for logo</div>
            </div>
            <ul className='Navbar-dashboard'>
                <li><NavLink to='/' className='navLink'> DASHBOARD </NavLink></li>
                <li><NavLink to='/' className='navLink'> IDEAS </NavLink></li>
                <li><NavLink to='/' className='navLink'> INBOX </NavLink></li>
                <li><NavLink to='/' className='navLink'> CREATE YOUR IDEA </NavLink></li>
            </ul>
            <ul className='Navbar-personal'>
                <li><NavLink to='/' className='navLink2'> About </NavLink></li>
                <li><NavLink to='/' className='navLink2'> Settings </NavLink></li>
            </ul>
        </nav>

    )
}

export default NavBar