import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <div className='lg:flex md:flex bg-blue-300 drop-shadow-2xl justify-between '>
                <div className='text-orange-600 font-bold text-5xl lg:ml-10'>
                    <h1>Quiz2Me</h1>
                </div>
                <nav className='lg:py-4 md:py-2 lg:font-bold md:font-bold lg:text-lg md:text-lg lg:mr-10'>
                    <NavLink className={({ isActive }) => isActive ? 'text-red-800' : undefined} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-red-800' : undefined} to='/statistics'>Statistics</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-red-800' : undefined} to='/blog'>Blogs</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-red-800' : undefined} to='/about'>About</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;