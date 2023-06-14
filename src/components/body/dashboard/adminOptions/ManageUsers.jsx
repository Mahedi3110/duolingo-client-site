import React, { useContext } from 'react';
import { DataContext } from '../../../../provider/DataProvider';

const ManageUsers = () => {
    const { students, instructors, reCallUsers, setReCallUsers, admins } = useContext(DataContext)

    const handleDelete = id => {
        if (confirm("Are you really want to delete this product")) {
            fetch(`https://duolingo-server-lilac.vercel.app/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("deleted")
                        setReCallUsers(!reCallUsers)
                    }
                })
        }
        else {
            return
        }
    }

    const handleAdmin = (id) => {
        const status = 'admin';
        const addToDB = { status }

        fetch(`https://duolingo-server-lilac.vercel.app/users/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToDB)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    alert("Done")
                    setReCallUsers(!reCallUsers)
                }
            })
    }

    const handleStudent = (id) => {
        const status = 'student';
        const addToDB = { status }

        // http://localhost:7000

        // https://duolingo-server-lilac.vercel.app

        fetch(`https://duolingo-server-lilac.vercel.app/users/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToDB)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Done")
                    setReCallUsers(!reCallUsers)
                }
            })
    }

    const handleInstructor = (id) => {
        const status = 'instructor';
        const addToDB = { status }

        fetch(`https://duolingo-server-lilac.vercel.app/users/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToDB)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Done")
                    setReCallUsers(!reCallUsers)
                }
            })
    }


    return (
        <div className='pt-32 px-10 ml-5'>
            <div className='mb-40'>
                <h1 className='text-2xl font-bold text-center'>Admin List</h1>
                <ol className='grid grid-cols-8 gap-3 mt-2 bg-lime-500 text-black text-sm px-10 py-3 rounded-full text-center'>
                    <p>Photo</p>
                    <p>Name</p>
                    <p className='col-span-3'>Email</p>
                    <p>Delete User</p>
                    <p className='col-span-2'>Status</p>
                </ol>
                {
                    admins?.map(data =>
                        <ol
                            key={data._id}
                            className='grid grid-cols-8 gap-3 mt-2 bg-lime-100 text-black text-sm px-10 py-3 rounded-full text-center'
                        >
                            <img className='w-10 h-10 object-cover rounded-full mx-auto' src={data?.img} alt="" />
                            <p>{data?.name}</p>
                            <p className='col-span-3'>{data?.email}</p>
                            <div className='flex justify-center'>
                                <p onClick={() => handleDelete(data?._id)} className='btn rounded-full btn-sm w-20 bg-orange-500 hover:bg-orange-600 border-0 normal-case'>Delete</p>
                            </div>
                            <div className='flex justify-center'>
                                <p onClick={() => handleInstructor(data?._id)} className='btn rounded-full btn-sm w-20 bg-lime-500 hover:bg-lime-600 border-0 normal-case'>Make instructor</p>
                            </div>
                            <div className='flex justify-center'>
                                <p onClick={() => handleStudent(data?._id)} className='btn rounded-full btn-sm w-20 bg-yellow-300 hover:bg-yellow-400 border-0 normal-case'>Make student</p>
                            </div>
                        </ol>)
                }
            </div>


            <div className='mb-40'>
                <h1 className='text-2xl font-bold text-center'>Instructor List</h1>
                <ol className='grid grid-cols-8 gap-3 mt-2 bg-lime-500 text-black text-sm px-10 py-3 rounded-full text-center'>
                    <p>Photo</p>
                    <p>Name</p>
                    <p className='col-span-3'>Email</p>
                    <p>Delete User</p>
                    <p className='col-span-2'>Status</p>
                </ol>
                {
                    instructors?.map(data =>
                        <ol
                            key={data._id}
                            className='grid grid-cols-8 gap-3 mt-2 bg-lime-100 text-black text-sm px-10 py-3 rounded-full text-center'
                        >
                            <img className='w-10 h-10 object-cover rounded-full mx-auto' src={data?.img} alt="" />
                            <p>{data?.name}</p>
                            <p className='col-span-3'>{data?.email}</p>
                            <div className='flex justify-center'>
                                <p onClick={() => handleDelete(data?._id)} className='btn rounded-full btn-sm w-20 bg-orange-500 hover:bg-orange-600 border-0 normal-case'>Delete</p>
                            </div>
                            <div className='flex justify-center'>
                                <p onClick={() => handleAdmin(data?._id)} className='btn rounded-full btn-sm w-20 bg-lime-500 hover:bg-lime-600 border-0 normal-case'>Make admin</p>
                            </div>
                            <div className='flex justify-center'>
                                <p onClick={() => handleStudent(data?._id)} className='btn rounded-full btn-sm w-20 bg-yellow-300 hover:bg-yellow-400 border-0 normal-case'>Make student</p>
                            </div>
                        </ol>)
                }
            </div>


            <div className='mb-40'>
                <h1 className='text-2xl font-bold text-center'>Student List</h1>
                <ol className='grid grid-cols-8 gap-3 mt-2 bg-lime-500 text-black text-sm px-10 py-3 rounded-full text-center'>
                    <p>Photo</p>
                    <p>Name</p>
                    <p className='col-span-3'>Email</p>
                    <p>Delete User</p>
                    <p className='col-span-2'>Status</p>
                </ol>
                {
                    students?.map(data =>
                        <ol
                            key={data._id}
                            className='grid grid-cols-8 gap-3 mt-2 bg-lime-100 text-black text-sm px-10 py-3 rounded-full text-center'
                        >
                            <img className='w-10 h-10 object-cover rounded-full mx-auto' src={data?.img} alt="" />
                            <p>{data?.name}</p>
                            <p className='col-span-3'>{data?.email}</p>
                            <div className='flex justify-center'>
                                <p onClick={() => handleDelete(data?._id)} className='btn rounded-full btn-sm w-20 bg-orange-500 hover:bg-orange-600 border-0 normal-case'>Delete</p>
                            </div>
                            <div className='flex justify-center'>
                                <p onClick={() => handleAdmin(data?._id)} className='btn rounded-full btn-sm w-20 bg-lime-500 hover:bg-lime-600 border-0 normal-case'>Make admin</p>
                            </div>
                            <div className='flex justify-center'>
                                <p onClick={() => handleInstructor(data?._id)} className='btn rounded-full btn-sm w-20 bg-yellow-300 hover:bg-yellow-400 border-0 normal-case'>Make instructor</p>
                            </div>
                        </ol>)
                }
            </div>
        </div>
    );
}

export default ManageUsers;