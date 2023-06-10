import React from 'react';
import useTitle from '../../hooks/useTitle';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewProduct = () => {

    useTitle("View Product")

    const paramsData = useParams();
    const loaderDatas = useLoaderData();

    const data = loaderDatas.find(loaderData => loaderData._id === paramsData.id)

    return (
        <div className='bg-black pt-32 pb-20 text-white'>
            <div className='mx-20 h-screen'>
                <div className='grid grid-cols-12 gap-10'>
                    <div
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                        className='col-span-6'>
                        <img className='rounded-3xl w-full' src={data?.photo} alt={data?.name} />
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                        className='col-span-6 flex flex-col justify-evenly'>
                        <h3 className="text-2xl font-bold text-orange-400">{data?.name}</h3>
                        <div>
                            <p className='text-orange-400'>Category: <span className='text-lg font-bold text-white'>{data?.category}</span> </p>
                            <p className='text-orange-400'>Ratting: <span className='text-lg font-bold text-white'>{data?.rating}</span> </p>
                            <p className='text-orange-400'>Available Quantity: <span className='text-lg font-bold text-white'>{data?.quantity}</span></p>
                            <p className='text-orange-400'>Seller Name: <span className='text-lg font-bold text-white'>{data?.sellerName}</span></p>
                            <p className='text-orange-400'>Saller Email: <span className='text-lg font-bold text-white'>{data?.email}</span></p>
                        </div>
                        <div>
                            <p className='text-lg font-bold text-orange-400'>About</p>
                            <p>{data?.about}</p>
                        </div>
                        <p className='text-xl font-bold rounded-xl text-orange-400'>Price: <span className='text-3xl text-white'>{data?.price} tk</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProduct;