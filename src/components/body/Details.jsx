import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../../provider/DataProvider';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Details = () => {
    const { approved, students, reCallSelect, setReCallSelect, selected } = useContext(DataContext);
    const { user } = useContext(AuthContext);
    const isStudent = students.find(student => student.email === user.email)
    const paramsData = useParams();
    const data = approved.find(classes => classes._id === paramsData.id)
    const mySelection = selected?.filter(select => select.selectedBy === user.email)
    const thisClass = mySelection?.find(select => select.id === data._id)
    const isSelected = thisClass?.status;

    const handleSelect = (data) => {
        const photo = data.photo;
        const name = data.name;
        const price = data.price;
        const selectedBy = user.email
        const status = "selected";
        const id = data._id
        const addToDB = { photo, name, price, selectedBy, status, id }

        fetch('http://localhost:7000/select', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToDB)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Selected")
                    setReCallSelect(!reCallSelect)
                }
            })
    }

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
                    {
                        isStudent ?
                            <>
                                {
                                    isSelected === "selected" || isSelected === "enrolled" ?
                                        <button disabled className='btn bg-lime-500 hover:bg-lime-600 normal-case text-lg mt-10 w-40'>Selected</button>
                                        :
                                        <button onClick={() => handleSelect(data)} className='btn bg-lime-500 hover:bg-lime-600 normal-case text-lg mt-10 w-40'>Select</button>
                                }
                            </>
                            :
                            <button disabled className='btn bg-lime-500 hover:bg-lime-600 normal-case text-lg mt-10 w-40'>Select</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Details;