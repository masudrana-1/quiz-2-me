import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const allquiz = useLoaderData();

    console.log(allquiz)
    return (
        <div>
            <h1>This is quiz page</h1>
        </div>
    );
};

export default Quiz;