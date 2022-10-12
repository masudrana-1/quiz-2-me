import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowSmallRightIcon, BeakerIcon } from '@heroicons/react/24/solid'

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
        <div className='bg-blue-100 m-auto p-10 w-10/12 rounded-2xl shadow-2xl'>
            <div>
                <img className='m-auto w-full' src={logo} alt="" />
            </div>
            <div className='flex justify-around mt-5'>
                <h4 className='flex text-lg font-medium'>Topic: <p className='text-orange-600 ml-4'>{name}</p></h4>
                <p className='text-lg font-medium'>Total Quiz: {total}</p>
                {/* <button className='bg-orange-500' onClick={() => quizloader(id)}><Link to=></button>Show all quiz</Link></button> */}
                <Link to={`/quiz/${id}`} className='flex ml-2 bg-amber-500 px-3 py-1 rounded-lg'>show all<ArrowSmallRightIcon className="h-5 w-8 mt-1" /></Link>
            </div>
        </div>
    );
};

export default Topic;