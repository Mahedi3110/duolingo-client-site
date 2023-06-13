import React, { useContext } from 'react';
import { DataContext } from '../../provider/DataProvider';
import { Link } from 'react-router-dom';

const Classes = () => {
    const { approved } = useContext(DataContext);
    return (
        <div className='mx-32 mt-28 mb-32'>
            <h1 className='text-center text-5xl font-bold'>Our all Classes</h1>
            <p className='text-center mt-2'>Welcome to our website's "All Classes" section! Here, you'll discover a diverse group of passionate and experienced instructors who are ready to guide you on your learning journey. From expert academics to industry professionals, our instructors bring a wealth of knowledge and a commitment to help you succeed. Explore their profiles and find the perfect mentor for your educational goals.</p>
            <div className='grid grid-cols-3 gap-10 mt-10'>
                {
                    approved?.map(approv =>
                        <div className='relative rounded-2xl overflow-hidden max-h-96' key={approv._id}>
                            <img src={approv.photo} alt="" />
                            <div
                                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                                className='absolute top-72 w-full h-full text-white px-5 pt-5 text-lg font-bold flex justify-between'>
                                <div>
                                    <h1>Name: {approv.name}</h1>
                                    <p>Price: {approv.price}/-</p>
                                </div>
                                <Link to={`/details/${approv?._id}`} className='btn bg-lime-500 hover:bg-lime-600 border-0 mt-1.5'>View Details</Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Classes;