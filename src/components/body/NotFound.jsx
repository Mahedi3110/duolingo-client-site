import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <div className='h-screen flex items-center justify-center'>
            <img className='ml-10' src="https://i.ibb.co/R7nLQp7/image.png" alt="" />
            <div className='flex flex-col mb-8 ml-5'>
                <h1 className='text-3xl font-bold mb-2'>Page not found</h1>
                <h1 className='text-8xl font-bold mb-2'>404</h1>
                <p className='font-bold my-3 text-lg'>Sorry, the page you were looking for doesn't exist.</p>
                <p>• If you typed the web address, make sure that it is correct.</p>
                <p>• If you pasted the web address, check that you copied the entire address.</p>
                <p>• Try going to <Link to='/home' className='text-lime-600 font-bold'>duolingo.com</Link></p>
                <p>• Follow us on <span className='text-blue-600 font-bold cursor-pointer'>Twitter</span> or <span className='text-blue-600 font-bold cursor-pointer'>Facebook</span></p>
            </div>
        </div >
    );
};

export default NotFound;