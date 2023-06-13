import React, { useContext } from 'react';
import { DataContext } from '../../../../provider/DataProvider';
import { Link } from 'react-router-dom';

const ManageClasses = () => {
    const { pendings, approved, reCallClasses, setReCallClasses } = useContext(DataContext)
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

    const handleApproved = (data) => {
        const photo = data.photo;
        const name = data.name;
        const instructorName = data.instructorName;
        const email = data.email;
        const availableSeats = data.availableSeats;
        const price = data.price;
        const about = data.about;
        const status = 'approved';
        const addToDB = { photo, name, instructorName, email, availableSeats, price, about, status }

        fetch(`http://localhost:7000/classes/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToDB)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Approved")
                    setReCallClasses(!reCallClasses)
                }
            })
    }

    const handleDenied = (data) => {
        const photo = data.photo;
        const name = data.name;
        const instructorName = data.instructorName;
        const email = data.email;
        const availableSeats = data.availableSeats;
        const price = data.price;
        const about = data.about;
        const status = 'denied';
        const addToDB = { photo, name, instructorName, email, availableSeats, price, about, status }

        fetch(`http://localhost:7000/classes/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToDB)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Denied")
                    setReCallClasses(!reCallClasses)
                }
            })
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
                    <p>Delete</p>
                </ol>
                {
                    approved?.map(data =>
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
                                <p onClick={() => handleDelete(data?._id)} className='btn rounded-full btn-sm w-20 bg-orange-500 hover:bg-orange-600 border-0 normal-case'>Delete</p>
                            </div>
                        </ol>)
                }
            </div>
            <div className='mb-40'>
                <h1 className='text-2xl font-bold text-center mb-5 bg-yellow-200 py-5'>Pending Classes</h1>
                <div className='grid grid-cols-2 gap-10'>
                    {
                        pendings?.map(data =>
                            <div
                                key={data._id}
                                className='mt-2 grid grid-cols-2 bg-lime-100 text-black text-sm px-10 py-8 rounded-xl text-center'
                            >
                                <img className='rounded-lg object-cover h-full' src={data?.photo} alt="" />
                                <div className='flex flex-col justify-evenly items-start ml-5'>
                                    <p className='text-xl font-bold'>Name: {data?.name}</p>
                                    <p>Instructor Name: {data?.instructorName}</p>
                                    <p>Email: {data?.email}</p>
                                    <p>Available Seats: {data?.availableSeats}</p>
                                    <p>Price: {data?.price}</p>
                                    <div className='flex justify-center'>
                                        <p onClick={() => handleApproved(data)} className='btn rounded-lg w-40 bg-lime-500 hover:bg-lime-600 border-0 normal-case'>Approv</p>
                                    </div>
                                    <div className='flex justify-center mt-2'>
                                        <p onClick={() => handleDenied(data)} className='btn rounded-lg w-40 bg-orange-500 hover:bg-orange-600 border-0 normal-case'>Denied</p>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageClasses;