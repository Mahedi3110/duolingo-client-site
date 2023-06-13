import React, { useContext } from 'react';
import { DataContext } from '../../provider/DataProvider';

const Instructors = () => {

    const { instructors } = useContext(DataContext);

    return (
        <div className='mx-32 mt-28 mb-32'>
            <h1 className='text-center text-5xl font-bold'>Our all instructor</h1>
            <p className='text-center mt-2'>Welcome to our website's "All Instructors" section! Here, you'll discover a diverse group of passionate and experienced instructors who are ready to guide you on your learning journey. From expert academics to industry professionals, our instructors bring a wealth of knowledge and a commitment to help you succeed. Explore their profiles and find the perfect mentor for your educational goals.</p>
            <div className='grid grid-cols-3 gap-10 mt-10'>
                {
                    instructors?.map(instructor =>
                        <div className='relative rounded-2xl overflow-hidden max-h-96' key={instructor._id}>
                            <img src={instructor.img} alt="" />
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