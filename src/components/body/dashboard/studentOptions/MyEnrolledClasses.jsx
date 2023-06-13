import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../../../../provider/DataProvider';
import { AuthContext } from '../../../../provider/AuthProvider';

const MyEnrolledClasses = () => {
    const { selected } = useContext(DataContext);
    const { user } = useContext(AuthContext)
    const mySelection = selected.filter(select => select.selectedBy === user.email)
    const onlySelected = mySelection.filter(select => select.status === 'enrolled')
    return (
        <div>
            <div className='mb-20 mt-28 mx-36 ml-32'>
                <h1 className='text-4xl font-bold text-center mb-10'>My Enrolled classes</h1>
                <div className='grid grid-cols-2 gap-20'>
                    {
                        onlySelected?.map(data =>
                            <div className='relative rounded-2xl overflow-hidden max-h-96' key={data._id}>
                                <img src={data?.photo} alt="" />
                                <div
                                    style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
                                    className='absolute top-72 w-full h-full text-white pt-7 text-2xl text-center'>
                                    <h1>Class name: {data?.name}</h1>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MyEnrolledClasses;