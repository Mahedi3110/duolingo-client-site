import React from 'react';
import { Link } from 'react-router-dom';

const ShowAllProducts = ({ ctg }) => {

    return (
        <ol
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="700"
            className='grid grid-cols-6 gap-3 mt-5 bg-orange-200 text-black text-sm px-10 py-3 text-center rounded-full'>
            <p>{ctg?.sellerName}</p>
            <p>{ctg?.name}</p>
            <p>{ctg?.category}</p>
            <p>{ctg?.price}</p>
            <p>{ctg?.quantity}</p>
            <div className='flex justify-center'>
                <Link to={`/view-product/${ctg?._id}`} className='btn rounded-full btn-sm w-28 bg-orange-500 hover:bg-orange-600 border-0 normal-case'>View Details</Link>
            </div>
        </ol>
    );
};

export default ShowAllProducts;