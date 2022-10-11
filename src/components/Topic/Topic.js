import React from 'react';

const Topic = ({ quiz }) => {

    const { name, logo, total } = quiz;

    return (
        <div className=''>
            <div>
                <img className='w-1/4' src={logo} alt="" />
            </div>
            <div>
                <h4>Name: {name}</h4>
                <p>Total quiz: {total}</p>
            </div>
        </div>
    );
};

export default Topic;