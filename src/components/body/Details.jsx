import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../../provider/DataProvider';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { approved } = useContext(DataContext);
    const paramsData = useParams();
    const data = approved.find(classes => classes._id === paramsData.id)
    return (
        <div className='mx-32'>
            <div className='grid grid-cols-12 bg-lime-100 my-28 p-7 rounded-2xl'>
                <img className='col-span-4 rounded-lg w-full h-full object-cover' src={data.photo} alt="" />
                <div className='col-span-8 ml-10 flex flex-col justify-evenly'>
                    <h1 className='text-3xl'>Name: {data.name} Language Class.</h1>
                    <p className='text-xl mt-5'>Instructors Name: {data.instructorName}</p>
                    <p className='text-xl'>Instructors Email: {data.email}</p>
                    <p className='text-xl'>Available Seats: {data.availableSeats}</p>
                    <p className='text-xl'>Price: {data.price}/-</p>
                    <p className='text-xl'>About: {data.about}</p>
                    <button className='btn bg-lime-500 normal-case text-lg mt-10 w-40'>Select</button>
                </div>
            </div>
        </div>
    );
};

export default Details;