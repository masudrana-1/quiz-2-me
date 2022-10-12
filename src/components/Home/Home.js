import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Statistics from '../Statistics/Statistics';
import Topic from '../Topic/Topic';

const Home = () => {
    const quiz = useLoaderData();

    const { data } = quiz;


    return (
        <div className='mt-5'>
            <Header></Header>
            <p className='text-2xl font-semibold mt-5 shadow-2xl'>Total Quiz Topic: {quiz.data.length}</p>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-6 w-10/12 m-auto'>
                {
                    data.map(quiz => <Topic key={quiz.id} quiz={quiz}></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;