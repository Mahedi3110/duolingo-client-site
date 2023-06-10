import React from 'react';
import { Link } from 'react-router-dom';

const CategoryData = ({ ctg }) => {

    return (
        <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            className='border border-gray-500 rounded-3xl overflow-hidden'>
            <img src={ctg.photo} alt={ctg.name} />
            <div className='p-4 flex flex-col justify-between h-56'>
                <h1 className='text-white text-xl font-bold'>{ctg.name}</h1>
                <p className='text-gray-400'>Ratting: 4.5</p>
                <p className='text-gray-400'>Price: <span className='text-white font-bold text-lg'>{ctg.price} tk</span></p>
                <Link to={`/view-details/${ctg.id}`} className='btn rounded-full bg-orange-400 hover:bg-orange-600 w-full mt-2'>View Details</Link>
            </div>
        </div>
    );
};

export default CategoryData;