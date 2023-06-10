import React, { useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { useLoaderData } from 'react-router-dom';
import ShowAllProducts from './ShowAllProducts';

const AllProduct = () => {

    useTitle("All Products")

    const loaderDatas = useLoaderData()

    const [show, setShow] = useState(false);
    const [query, setQuery] = useState("");

    return (
        <div className='bg-black pt-20 pb-32'>
            <div className='text-white mt-10 text-xl mx-24'>
                <div
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="400"
                    className='flex justify-center items-center'>
                    <p className='text-orange-400 font-bold mr-2'>Search</p>
                    <input onChange={event => setQuery(event.target.value)} className='w-2/5 text-black rounded-full' type="search" name='search' placeholder='search product name' />
                </div>
                <ol
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                    className='grid grid-cols-6 gap-3 mt-5 bg-orange-400 text-black text-center text-sm px-10 py-3 rounded-full'>
                    <p>Seller Name</p>
                    <p>Product Name</p>
                    <p>Sub-category</p>
                    <p>Price</p>
                    <p>Available Quantity</p>
                    <p>View Details</p>
                </ol>
                {show ?
                    loaderDatas.filter(post => {
                        if (query === '') {
                            return post;
                        } else if (post?.name?.toLowerCase().includes(query.toLowerCase())) {
                            return post;
                        }
                    }).map(ctg =>
                        <ShowAllProducts
                            key={ctg._id}
                            ctg={ctg}
                        ></ShowAllProducts>)
                    :
                    loaderDatas.filter(post => {
                        if (query === '') {
                            return post;
                        } else if (post?.name?.toLowerCase().includes(query.toLowerCase())) {
                            return post;
                        }
                    }).slice(0, 21).map(ctg =>
                        <ShowAllProducts
                            key={ctg._id}
                            ctg={ctg}
                        ></ShowAllProducts>)
                }
            </div>
            <div className='flex justify-center mt-20'>
                <button className='btn rounded-full bg-orange-400 hover:bg-orange-600 w-1/5' onClick={() => setShow(!show)}>{show ? "Show less" : "Show All"}</button>
            </div>
        </div>
    );
};

export default AllProduct;