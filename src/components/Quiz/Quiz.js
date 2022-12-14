import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllQuiz from '../AllQuiz/AllQuiz';

const Quiz = () => {
    const data = useLoaderData();

    const { name, questions, total } = data.data;
    console.log(data);
    return (
        <div className='mt-5'>
            <h1 className='text-4xl mb-4 font-semibold'>{name}</h1>
            <h5 className='text-xl'>Total Quiz: {total}</h5>
            <div>
                {
                    questions.map(ques => <AllQuiz key={ques.id} ques={ques}></AllQuiz>)
                }
            </div>
        </div>
    );
};

export default Quiz;