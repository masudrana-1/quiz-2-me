import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='h-screen'>
            <div className='mt-6'>
                <h1 className='text-xl font-bold text-black mb-2'>To know more about</h1>
                <p className='text-xl font-bold text-black mb-2'>Please contruct us</p>
                <h1 className='text-xl font-bold text-black mb-2'>Mobile : +9907837478</h1>
                <h1 className='text-xl font-bold text-black mb-2'>Telephone: +9864716543</h1>
                <h1 className='text-xl font-bold text-black mb-2'>Hotline: 16543 (24 hours)</h1>
                <div className='font-sans'>
                    <Link className='ml-3 font-semibold text-purple-900' to='web.facebook.com'>Facebook</Link>
                    <Link className='ml-3 font-semibold text-purple-900' to='www.twitter.com'>Twitter</Link>
                    <Link className='ml-3 font-semibold text-purple-900' to='www.linkedin.com'>Linkedin</Link>
                    <Link className='ml-3 font-semibold text-purple-900' to='www.github.com'>Github</Link>
                </div>
                <p></p>
            </div>
        </div>
    );
};

export default About;