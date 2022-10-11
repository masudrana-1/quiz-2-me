import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';

const Home = () => {
    const quiz = useLoaderData();

    const { data } = quiz;


    return (
        <div>
            <Header></Header>
            <h1>This is home</h1>
            <p>Total Quiz: {quiz.data.length}</p>
            <div className='grid grid-cols-2 gap-8 mt-6 mx-auto my-auto items-center'>
                {
                    data.map(quiz => <Topic key={quiz.id} quiz={quiz}></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;