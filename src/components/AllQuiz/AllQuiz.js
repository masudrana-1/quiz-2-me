import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { toast } from 'react-toastify';

const AllQuiz = ({ ques }) => {
    // console.log(ques)
    const { question, correctAnswer, options } = ques;

    const [a, b, c] = options;

    const notify = (x) => {
        if (x === correctAnswer) {
            toast("true");
        }
        else {
            toast('false');
        }
    }

    const rightAns = () => {
        toast(correctAnswer);
    }

    return (
        <div className='bg-gradient-to-r from-violet-800 via-blue-600 to-green-600 mt-5 p-8 w-10/12 m-auto rounded-bl-3xl rounded-tr-3xl shadow-2xl'>
            <div className='relative mb-6'>
                <h1 className='text-xl text-white'>{question}</h1>
                <button onClick={rightAns}><EyeIcon className="h-5 w-8 mt-1 absolute top-0 right-0"></EyeIcon></button>
            </div>
            <div className='flex flex-col'>
                <button onClick={() => notify(a)} className='bg-gradient-to-r from-orange-600 via-purple-300 to-green-200 hover:bg-red-400 rounded-tl-3xl rounded-br-3xl p-3 mt-2 lg:w-3/12 m-auto'>1. {options[0]}</button>
                <button onClick={() => notify(b)} className='bg-slate-200 hover:bg-green-400 rounded-tl-3xl rounded-br-3xl p-3 mt-2 lg:w-3/12 m-auto'>2. {options[1]}</button>
                <button onClick={() => notify(c)} className='bg-slate-200 hover:bg-green-400 rounded-tl-3xl rounded-br-3xl p-3 mt-2 lg:w-3/12 m-auto'>3. {options[2]}</button>
            </div>
        </div>
    );
};

export default AllQuiz;