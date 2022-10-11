import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        <div className='bg-teal-100 m-auto p-10 w-10/12'>
            <div>
                <img className='m-auto w-full' src={logo} alt="" />
            </div>
            <div className='flex justify-around mt-5'>
                <h4>Name: {name}</h4>
                <p>Total quiz: {total}</p>
                {/* <button className='bg-orange-500' onClick={() => quizloader(id)}><Link to=></button>Show all quiz</Link></button> */}
                <Link to={`/quiz/${id}`}>show all</Link>
            </div>
        </div>
    );
};

export default Topic;