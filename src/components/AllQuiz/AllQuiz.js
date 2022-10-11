import React from 'react';

const AllQuiz = ({ ques }) => {
    console.log(ques)

    const { question, correctAnswer, options } = ques;
    return (
        <div className='bg-orange-400 mt-5 p-8 w-10/12 m-auto rounded-bl-3xl rounded-tr-3xl'>
            <h1>{question}</h1>
            <div>
                <p className='bg-slate-200 p-3 mt-2 w-3/12 m-auto'>1. {options[0]}</p>
                <p className='bg-slate-200 p-3 mt-2 w-3/12 m-auto'>2. {options[1]}</p>
                <p className='bg-slate-200 p-3 mt-2 w-3/12 m-auto'>3. {options[2]}</p>
            </div>
        </div>
    );
};

export default AllQuiz;