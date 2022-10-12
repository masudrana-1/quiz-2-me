import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-5xl text-gray-800 mt-16 font-extrabold'>All Blogs</h1>
            <div className='bg-red-800 mt-5 text-lg text-white p-5 w-11/12 m-auto rounded-tl-3xl rounded-br-3xl'>
                <h1 className='text-2xl font-bold text-green-500'>1. What is the purpose of react router?</h1>
                <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className='bg-teal-600 mt-5 text-lg text-white p-5 w-11/12 m-auto rounded-tl-3xl rounded-br-3xl'>
                <h1 className='text-2xl font-bold text-rose-900'>2. How does context api works?</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='bg-blue-700 mt-5 text-lg text-white p-5 w-11/12 m-auto rounded-tl-3xl rounded-br-3xl'>
                <h1 className='text-2xl font-bold text-orange-500'>3. What is react router useref hooks?</h1>
                <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                <p><small>In this post we’ll cover what the useRef Hook is, what we can use it for and some advice for using it.

                    The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

                    const refContainer = useRef(initialValue);
                    There are two main uses of useRef that are explained in the following sections: Accessing the DOM nodes or React elements and keeping a mutable variable.</small></p>
            </div>
        </div>
    );
};

export default Blog;