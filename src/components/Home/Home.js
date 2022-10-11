import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const quiz = useLoaderData();

    const { data } = quiz;


    return (
        <div>
            <h1>This is home</h1>
            <p>Total Quiz: {quiz.data.length}</p>
            <div className='grid grid-cols-2'>
                {
                    data.map(quiz => <Topic key={quiz.id} quiz={quiz}></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;