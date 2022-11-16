import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className='navbar'>
            <Link to='/' className='link'>Homepage</Link>
            <Link to='/routines' className='link'>Routines</Link>
            <Link to='/myroutines' className='link'>My Routines</Link>
            <Link to='activities' className='link'>Activities</Link>
            <Link to='/login' className='link'>Login</Link>
            <Link to='/register' className='link'>Register</Link>

        </nav>
    )
}

export default Navbar;