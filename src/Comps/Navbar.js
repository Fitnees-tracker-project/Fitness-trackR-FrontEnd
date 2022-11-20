import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(

        <nav className='navbar'>
            <Link to='/' className='link'>Homepage</Link>
            <Link to='/routines' className='link'>Routines</Link>
            <Link to='/Activities' className='link'>Activities</Link>
            <Link to='/login' className='link'>Login</Link>
            <Link to='/register' className='link'>Register</Link>
            <Link to='/NewActivity' className='link'>Create New Activity</Link>
        </nav>
    )
}

export default Navbar;