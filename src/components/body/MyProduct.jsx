import React, { useContext, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import MyAllProduct from './MyAllProduct';

const MyProduct = () => {

    useTitle("My Choice")

    const { user } = useContext(AuthContext)
    const loaderDatas = useLoaderData()

    return (
        <div className='bg-black h-screen pt-32 px-24'>
            <ol
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                className='grid grid-cols-7 gap-3 mt-5 bg-orange-400 text-black text-sm px-10 py-3 rounded-full text-center'>
                <p>Seller Name</p>
                <p>Product Name</p>
                <p>Sub-category</p>
                <p>Price</p>
                <p>Available Quantity</p>
                <p>Update</p>
                <p>Delete</p>
            </ol>
            {
                loaderDatas.filter(post => post?.email?.toLowerCase().includes(user?.email?.toLowerCase()))
                    .map(ctg =>
                        <MyAllProduct
                            key={ctg._id}
                            ctg={ctg}
                        ></MyAllProduct>)
            }
        </div>
    );
};

export default MyProduct;