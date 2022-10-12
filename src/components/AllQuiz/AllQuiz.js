import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';

const AllQuiz = ({ ques }) => {
    // console.log(ques)
    const { question, correctAnswer, options } = ques;

    const [a, b, c] = options;

    const notify = (x) => {
        if (x === correctAnswer) {
            alert("true");
        }
        else {
            alert('false')
        }
    }

    return (
        <div className='bg-orange-400 mt-5 p-8 w-10/12 m-auto rounded-bl-3xl rounded-tr-3xl'>
            <div className='relative mb-6'>
                <h1 className='text-xl'>{question}</h1>
                <EyeIcon className="h-5 w-8 mt-1 absolute top-0 right-0"></EyeIcon>
            </div>
            <div className='flex flex-col'>
                <button onClick={() => notify(a)} className='bg-slate-200 p-3 mt-2 w-3/12 m-auto'>1. {options[0]}</button>
                <button onClick={() => notify(b)} className='bg-slate-200 p-3 mt-2 w-3/12 m-auto'>2. {options[1]}</button>
                <button onClick={() => notify(c)} className='bg-slate-200 p-3 mt-2 w-3/12 m-auto'>3. {options[2]}</button>
            </div>
        </div>
    );
};

export default AllQuiz;