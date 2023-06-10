import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <div className='h-screen flex items-center justify-center text-white bg-black'>
            <div className='flex flex-col items-center mb-20'>
                <h1 className='text-5xl font-bold mb-5'>Sorry</h1>
                <h1 className='text-5xl font-semibold mb-5'>Page not found</h1>
                <div className='flex items-center'>
                    <h1 className='text-9xl font-bold'>4</h1>
                    <img className='w-24 h-24' src="https://www.digitiser2000.com/uploads/4/0/6/6/40667199/2803905.png?301" alt="" />
                    <h1 className='text-9xl font-bold'>4</h1>
                </div>
                <p className='mt-5'>Go to the <Link className='text-orange-600 underline font-semibold' to="/">Home Page</Link></p>
            </div>
        </div>
    );
};

export default NotFound;