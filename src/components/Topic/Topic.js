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
        setAllquiz(id);
    };

    // console.log(allquiz)


    return (
        <div className='w-6/12'>
            <div>
                <img className='' src={logo} alt="" />
            </div>
            <div>
                <h4>Name: {name}</h4>
                <p>Total quiz: {total}</p>
                <Link to='/home/quiz' className='bg-orange-500' onClick={() => quizloader(id)}>Show all quiz</Link>
            </div>
        </div>
    );
};

export default Topic;