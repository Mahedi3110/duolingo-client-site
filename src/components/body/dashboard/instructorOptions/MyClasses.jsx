import React, { useContext } from 'react';
import { DataContext } from '../../../../provider/DataProvider';
import { AuthContext } from '../../../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyClasses = () => {
    const { denied, pendings, approved, reCallClasses, setReCallClasses } = useContext(DataContext)
    console.log(reCallClasses);
    const { user } = useContext(AuthContext)

    const handleDelete = id => {
        if (confirm("Are you really want to delete this product")) {
            fetch(`http://localhost:7000/classes/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("deleted")
                        setReCallClasses(!reCallClasses)
                    }
                })
        }
        else {
            return
        }
    }

    return (
        <div className='pt-32 px-10 ml-5'>
            <div className='mb-40'>
                <h1 className='text-2xl font-bold text-center'>Approved Classes</h1>
                <ol className='grid grid-cols-6 gap-3 mt-2 bg-lime-500 text-black text-sm px-10 py-3 rounded-full text-center'>
                    <p>Class Name</p>
                    <p>Instructor Name</p>
                    <p>Email</p>
                    <p>Available seats</p>
                    <p>Price</p>
                    <p>Update</p>
                </ol>
                {
                    approved?.filter(data => data?.email === user?.email)
                        .map(data =>
                            <ol
                                key={data._id}
                                className='grid grid-cols-6 gap-3 mt-2 bg-lime-100 text-black text-sm px-10 py-3 rounded-full text-center'
                            >
                                <p>{data?.name}</p>
                                <p>{data?.instructorName}</p>
                                <p>{data?.email}</p>
                                <p>{data?.availableSeats}</p>
                                <p>{data?.price}</p>
                                <div className='flex justify-center'>
                                    <Link to={`/dashboard/update/${data?._id}`} className='btn rounded-full btn-sm w-20 bg-lime-500 hover:bg-lime-600 border-0 normal-case'>Update</Link>
                                </div>
                            </ol>)
                }
            </div>
            <div className='mb-40'>
                <h1 className='text-2xl font-bold text-center'>Pending Classes</h1>
                <ol className='grid grid-cols-7 gap-3 mt-2 bg-yellow-300 text-black text-sm px-10 py-3 rounded-full text-center'>
                    <p>Class Name</p>
                    <p>Instructor Name</p>
                    <p>Email</p>
                    <p>Available seats</p>
                    <p>Price</p>
                    <p>Update</p>
                    <p>Delete</p>
                </ol>
                {
                    pendings?.filter(data => data?.email === user?.email)
                        .map(data =>
                            <ol
                                key={data._id}
                                className='grid grid-cols-7 gap-3 mt-2 bg-lime-100 text-black text-sm px-10 py-3 rounded-full text-center'
                            >
                                <p>{data?.name}</p>
                                <p>{data?.instructorName}</p>
                                <p>{data?.email}</p>
                                <p>{data?.availableSeats}</p>
                                <p>{data?.price}</p>
                                <div className='flex justify-center'>
                                    <Link to={`/dashboard/update/${data?._id}`} className='btn rounded-full btn-sm w-20 bg-lime-500 hover:bg-lime-600 border-0 normal-case'>Update</Link>
                                </div>
                                <div className='flex justify-center'>
                                    <p onClick={() => handleDelete(data?._id)} className='btn rounded-full btn-sm w-20 bg-orange-500 hover:bg-orange-600 border-0 normal-case'>Delete</p>
                                </div>
                            </ol>)
                }
            </div>
            <div className='mb-40'>
                <h1 className='text-2xl font-bold text-center'>Denied Classes</h1>
                <ol className='grid grid-cols-7 gap-3 mt-2 bg-red-600 text-black text-sm px-10 py-3 rounded-full text-center'>
                    <p>Class Name</p>
                    <p>Instructor Name</p>
                    <p>Email</p>
                    <p>Available seats</p>
                    <p>Price</p>
                    <p>Update</p>
                    <p>Delete</p>
                </ol>
                {
                    denied?.filter(data => data?.email === user?.email)
                        .map(data =>
                            <ol
                                key={data._id}
                                className='grid grid-cols-7 gap-3 mt-2 bg-lime-100 text-black text-sm px-10 py-3 rounded-full text-center'
                            >
                                <p>{data?.name}</p>
                                <p>{data?.instructorName}</p>
                                <p>{data?.email}</p>
                                <p>{data?.availableSeats}</p>
                                <p>{data?.price}</p>
                                <div className='flex justify-center'>
                                    <Link to={`/dashboard/update/${data?._id}`} className='btn rounded-full btn-sm w-20 bg-lime-500 hover:bg-lime-600 border-0 normal-case' disabled>Update</Link>
                                </div>
                                <div className='flex justify-center'>
                                    <p onClick={() => handleDelete(data?._id)} className='btn rounded-full btn-sm w-20 bg-orange-500 hover:bg-orange-600 border-0 normal-case'>Delete</p>
                                </div>
                            </ol>)
                }
            </div>
        </div>
    );
};

export default MyClasses;