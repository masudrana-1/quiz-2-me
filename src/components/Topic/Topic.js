import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'

const Topic = ({ quiz }) => {
    const { id, name, logo, total } = quiz;

    const [allquiz, setAllquiz] = useState([]);

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
            .then(res => res.json())
            .then(data => setAllquiz(data))
    }, [])

    // console.log(allquiz);

    const quizloader = (id) => {
        allquiz(id);
    };

    // console.log(allquiz)


    return (
        <div className='bg-gradient-to-r from-violet-800 via-blue-600 to-green-600 m-auto p-10 w-10/12 rounded-2xl shadow-2xl'>
            <div>
                <img className='m-auto w-full' src={logo} alt="" />
            </div>
            <div className='flex lg:justify-around flex-col lg:flex-row justify-center items-center mt-5 text-center'>
                <h4 className='flex text-lg font-medium'>Topic: <p className='text-orange-600 ml-4'>{name}</p></h4>
                <p className='text-lg font-medium'>Total Quiz: <small className='text-orange-600 text-lg ml-4'>{total}</small> </p>
                {/* <button className='bg-orange-500' onClick={() => quizloader(id)}><Link to=></button>Show all quiz</Link></button> */}
                <Link to={`/quiz/${id}`} className='flex ml-2 bg-amber-500 px-3 py-1 rounded-lg'>show all<ArrowSmallRightIcon className="h-5 w-8 mt-1" /></Link>
            </div>
        </div>
    );
};

export default Topic;