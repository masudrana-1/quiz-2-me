import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <div className='flex bg-slate-200 justify-between '>
                <div className='font-bold text-5xl ml-10'>
                    <h1>Quiz2Me</h1>
                </div>
                <div className=' py-4 font-bold text-lg mr-10'>
                    <Link className='' to='/'>Home</Link>
                    <Link className='ml-5' to='/statistics'>Statistics</Link>
                    <Link className='ml-5' to='/blog'>Blogs</Link>
                    <Link className='ml-5' to='/about'>About</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;