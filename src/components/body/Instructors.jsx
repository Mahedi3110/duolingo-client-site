import React, { useContext } from 'react';
import { DataContext } from '../../provider/DataProvider';

const Instructors = () => {

    const { instructors } = useContext(DataContext);

    return (
        <div className='mx-32 mt-28 mb-32'>
            <h1 className='text-center text-5xl font-bold'>Our all instructor</h1>
            <p className='text-center mt-2'>Our all instructors photo, name and email id are given dellow.</p>
            <div className='grid grid-cols-3 gap-10 mt-10'>
                {
                    instructors?.map(instructor =>
                        <div className='relative rounded-2xl overflow-hidden max-h-96' key={instructor._id}>
                            <img className='' src={instructor.img} alt="" />
                            <div
                                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                                className='absolute top-72 w-full h-full text-white pl-5 pt-5 text-lg font-bold'>
                                <h1>Name: {instructor.name}</h1>
                                <p>Email: {instructor.email}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Instructors;